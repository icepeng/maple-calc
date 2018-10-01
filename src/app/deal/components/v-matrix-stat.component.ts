import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';
import { jobEntities } from '../entities/job';
import { skillEntities } from '../entities/skill';
import { JOB_CODE } from '../models/job.model';
import { Skill } from '../models/skill.model';
import { Stat } from '../models/stat.model';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-v-matrix-stat',
  templateUrl: './v-matrix-stat.component.html',
  styles: [
    `
      mat-card {
        margin: 12px;
        flex: 1;
      }

      .wrapper {
        display: flex;
      }

      table {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VMatrixStatComponent implements OnInit, OnChanges {
  @Input()
  job: JOB_CODE;

  skillCores: Skill[];
  displayedColumns = ['select', 'name', 'level'];
  selection = new SelectionModel<Skill>(true, []);

  skillLevels$ = new BehaviorSubject<{ [code: string]: number }>({});
  stat$: Observable<Partial<Stat>>;

  constructor(private statService: StatService) {}

  ngOnInit() {
    this.stat$ = this.selection.changed.pipe(
      map(() => this.selection.selected),
      combineLatest(this.skillLevels$),
      map(([selected, levels]) => {
        return this.statService.convertPassiveSkills(
          selected.reduce((obj, skill) => {
            obj[skill.code] = levels[skill.code];
            return obj;
          }, {}),
        );
      }),
    );
  }

  ngOnChanges() {
    if (!this.job) {
      return;
    }

    const job = jobEntities[this.job];
    this.skillLevels$.next(
      job.skillCores.reduce((obj, x) => {
        obj[x] = 0;
        return obj;
      }, {}),
    );
    this.skillCores = job.skillCores.map(x => skillEntities[x]);
  }

  changeSkillLevel(skill: Skill, value: number) {
    const levels = this.skillLevels$.getValue();
    levels[skill.code] = Number.isInteger(value) ? value : 0;
    this.skillLevels$.next(levels);
  }
}
