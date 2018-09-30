import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { unionCardEffectEntities } from '../models/union';
import { SelectionModel } from '@angular/cdk/collections';
import { JOB_CODE } from '../models/job.model';
import { jobNames } from '../models/job';

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
