import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jobEntities } from '../models/job';
import { Observable } from 'rxjs';
import { startWith, map, combineLatest } from 'rxjs/operators';
import { StatService } from '../services/stat.service';
import { Stat } from '../models/stat.model';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styles: [
    `
      .grid-container {
        margin: 20px;
      }

      mat-form-field {
        margin-right: 12px;
      }

      mat-tab-group {
        margin-right: 24px;
        flex: 1;
      }

      mat-tab {
        padding: 12px;
      }

      mat-card {
        width: 480px;
        height: 640px;
        flex: 1;
      }

      .layout {
        display: flex;
        justity-content: space-between;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealComponent implements OnInit {
  availableJobs = Object.values(jobEntities);

  job = new FormControl(null);
  level = new FormControl(200);
  levelStat$: Observable<Partial<Stat>>;

  constructor(private statService: StatService) {}

  ngOnInit() {}
}
