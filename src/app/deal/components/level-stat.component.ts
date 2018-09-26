import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { JOB_CODE } from '../models/job.model';
import { Stat } from '../models/stat.model';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-level-stat',
  templateUrl: './level-stat.component.html',
  styles: [
    `
      mat-card {
        margin: 12px;
        flex: 1;
      }

      .wrapper {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelStatComponent implements OnInit, OnChanges {
  @Input()
  level: number;
  @Input()
  job: JOB_CODE;

  stat: Partial<Stat>;

  constructor(private statService: StatService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.level || !this.job) {
      return;
    }
    this.stat = this.statService.getLevelStat(this.job, this.level, false);
  }
}
