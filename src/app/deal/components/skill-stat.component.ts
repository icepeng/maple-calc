import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { jobEntities } from '../entities/job';
import { JOB_CODE } from '../models/job.model';
import { skillEntities } from '../entities/skill';
import { linkSkills } from '../entities/skill/skill-link';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill-stat',
  templateUrl: './skill-stat.component.html',
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
export class SkillStatComponent implements OnInit, OnChanges {
  @Input()
  job: JOB_CODE;

  skills: Skill[];
  dataSource = linkSkills;
  displayedColumns = ['select', 'name', 'level'];
  selection = new SelectionModel<Skill>(true, []);

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.job) {
      return;
    }
    const job = jobEntities[this.job];
    this.skills = job.skills.map(code => skillEntities[code]);
  }
}
