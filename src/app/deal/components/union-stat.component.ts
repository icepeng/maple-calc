import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { jobNames } from '../entities/job';
import { unionCardEffectEntities } from '../entities/union';
import { JOB_CODE } from '../models/job.model';

@Component({
  selector: 'app-union-stat',
  templateUrl: './union-stat.component.html',
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
export class UnionStatComponent implements OnInit {
  unionLevel = new FormControl(null);
  ranks = new FormGroup(
    Object.keys(unionCardEffectEntities).reduce(
      (obj, x) => ({ ...obj, [x]: new FormControl(null) }),
      {},
    ),
  );
  dataSource = Object.keys(unionCardEffectEntities).map(x => ({
    code: x,
    name: jobNames[x],
  }));
  displayedColumns = ['select', 'name', 'rank'];
  selection = new SelectionModel<JOB_CODE | 'M'>(true, []);

  constructor() {}

  ngOnInit() {}
}
