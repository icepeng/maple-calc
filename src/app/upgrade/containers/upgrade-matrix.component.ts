import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {
  FormGroup,
  FormControl,
  Validators,
} from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-upgrade-matrix',
  templateUrl: './upgrade-matrix.component.html',
  styles: [
    `
      .grid-container {
        margin: 20px;
      }

      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }

      .upgrade-form mat-form-field {
        width: 100%;
      }

      .U {
        background-color: #fff9c4;
      }

      .I {
        background-color: #d1c4e9;
      }

      .H {
        background-color: #f9a825;
      }

      .W {
        background-color: #e0f7fa;
      }

      .F {
        background-color: #f3e5e5;
      }

      .X {
        background-color: #616161;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradeMatrixComponent implements OnInit {
  formGroup = new FormGroup({
    upgradePercentage: new FormControl(0.39, Validators.required),
    upgradeLimit: new FormControl(8, Validators.required),
    innocentPercentage: new FormControl(0.45, Validators.required),
    whitePercentage: new FormControl(0.1, Validators.required),
    hammerPercentage: new FormControl(0.5, Validators.required),
    upgradePrice: new FormControl(337.5, Validators.required),
    innocentPrice: new FormControl(1250, Validators.required),
    whitePrice: new FormControl(500, Validators.required),
    hammerPrice: new FormControl(300, Validators.required),
  });

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  cost: number;
  beforeHammer: string[][];
  afterHammer: string[][];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  calculate() {
    const {
      upgradePercentage,
      upgradeLimit,
      innocentPercentage,
      whitePercentage,
      hammerPercentage,
      upgradePrice,
      innocentPrice,
      whitePrice,
      hammerPrice,
    } = this.formGroup.value;
    const { min, minA, minB } = this.tryAll({
      upgradePercentage: +upgradePercentage,
      upgradeLimit: +upgradeLimit,
      innocentPercentage: +innocentPercentage,
      whitePercentage: +whitePercentage,
      hammerPercentage: +hammerPercentage,
      upgradePrice: +upgradePrice,
      innocentPrice: +innocentPrice,
      whitePrice: +whitePrice,
      hammerPrice: +hammerPrice,
    });
    this.cost = min / 10000;
    this.beforeHammer = Array.from(Array(+upgradeLimit + 1), () =>
      Array(+upgradeLimit + 1).fill('X'),
    );
    this.afterHammer = Array.from(Array(+upgradeLimit + 2), () =>
      Array(+upgradeLimit + 2).fill('X'),
    );
    for (let i = 0; i <= +upgradeLimit; i++) {
      for (let j = i; j < minA[i].try; j++) {
        this.beforeHammer[i][j] = 'U';
      }
      this.beforeHammer[i][minA[i].try] = minA[i].action;
    }
    for (let i = 0; i <= +upgradeLimit; i++) {
      for (let j = i; j < minB[i].try; j++) {
        this.afterHammer[i][j] = 'U';
      }
      this.afterHammer[i][minB[i].try] = minB[i].action;
    }
    this.afterHammer[+upgradeLimit + 1][+upgradeLimit + 1] = 'F';
  }

  calculateMatrix(
    {
      upgradePercentage,
      upgradeLimit,
      innocentPercentage,
      whitePercentage,
      hammerPercentage,
      upgradePrice,
      innocentPrice,
      whitePrice,
      hammerPrice,
    },
    actionNormal,
    actionHammer,
  ) {
    const actionMatrixNormal = Array.from(Array(upgradeLimit + 1), () =>
      Array(upgradeLimit + 1).fill(null),
    );
    const actionMatrixHammer = Array.from(Array(upgradeLimit + 2), () =>
      Array(upgradeLimit + 2).fill(null),
    );

    for (let i = 0; i <= upgradeLimit; i++) {
      for (let j = 0; j < actionNormal[i].try; j++) {
        actionMatrixNormal[i][j] = 'U';
      }
      actionMatrixNormal[i][actionNormal[i].try] = actionNormal[i].action;
    }

    for (let i = 0; i <= upgradeLimit + 1; i++) {
      for (let j = 0; j < actionHammer[i].try; j++) {
        actionMatrixHammer[i][j] = 'U';
      }
      actionMatrixHammer[i][actionHammer[i].try] = actionHammer[i].action;
    }

    const costNormal = Array.from(Array(upgradeLimit + 1), () =>
      Array(upgradeLimit + 1).fill(0),
    );
    const costHammer = Array.from(Array(upgradeLimit + 2), () =>
      Array(upgradeLimit + 2).fill(0),
    );
    const innocentNormal = Array.from(Array(upgradeLimit + 1), () =>
      Array(upgradeLimit + 1).fill(0),
    );
    const innocentHammer = Array.from(Array(upgradeLimit + 2), () =>
      Array(upgradeLimit + 2).fill(0),
    );
    const costFinalNormal = Array.from(Array(upgradeLimit + 1), () =>
      Array(upgradeLimit + 1).fill(0),
    );
    const costFinalHammer = Array.from(Array(upgradeLimit + 2), () =>
      Array(upgradeLimit + 2).fill(0),
    );

    for (let i = upgradeLimit; i >= 0; i--) {
      for (let j = upgradeLimit + 1; j >= i; j--) {
        if (actionMatrixHammer[i][j] === 'U') {
          if (actionMatrixHammer[i][j + 1] === 'W') {
            costHammer[i][j] =
              costHammer[i + 1][j + 1] +
              ((1 - upgradePercentage) / upgradePercentage) *
                (whitePrice / whitePercentage) +
              upgradePrice / upgradePercentage;
            costHammer[i][j + 1] =
              costHammer[i][j] + whitePrice / whitePercentage;
            innocentHammer[i][j] = innocentHammer[i + 1][j + 1];
            innocentHammer[i][j + 1] = innocentHammer[i + 1][j + 1];
          } else {
            costHammer[i][j] =
              upgradePercentage * costHammer[i + 1][j + 1] +
              (1 - upgradePercentage) * costHammer[i][j + 1] +
              upgradePrice;
            innocentHammer[i][j] =
              upgradePercentage * innocentHammer[i + 1][j + 1] +
              (1 - upgradePercentage) * innocentHammer[i][j + 1];
          }
        }
        if (actionMatrixHammer[i][j] === 'I') {
          innocentHammer[i][j] = 1;
          costHammer[i][j] = innocentPrice / innocentPercentage;
        }
      }
    }

    for (let i = upgradeLimit; i >= 0; i--) {
      for (let j = upgradeLimit; j >= i; j--) {
        if (actionMatrixNormal[i][j] === 'U') {
          costNormal[i][j] =
            upgradePercentage * costNormal[i + 1][j + 1] +
            (1 - upgradePercentage) * costNormal[i][j + 1] +
            upgradePrice;
          innocentNormal[i][j] =
            upgradePercentage * innocentNormal[i + 1][j + 1] +
            (1 - upgradePercentage) * innocentNormal[i][j + 1];
        }
        if (actionMatrixNormal[i][j] === 'H') {
          costNormal[i][j] =
            hammerPercentage * costHammer[i][j] +
            (1 - hammerPercentage) * costHammer[i][j + 1] +
            hammerPrice;
          innocentNormal[i][j] =
            hammerPercentage * innocentHammer[i][j] +
            (1 - hammerPercentage) * innocentHammer[i][j + 1];
        }
        if (actionMatrixNormal[i][j] === 'I') {
          innocentNormal[i][j] = 1;
          costNormal[i][j] = innocentPrice / innocentPercentage;
        }
      }
    }

    for (let i = upgradeLimit; i >= 0; i--) {
      for (let j = upgradeLimit + 1; j >= i; j--) {
        if (actionMatrixHammer[i][j] === 'U') {
          if (actionMatrixHammer[i][j + 1] === 'W') {
            costFinalHammer[i][j] =
              costFinalHammer[i + 1][j + 1] +
              ((1 - upgradePercentage) / upgradePercentage) *
                (whitePrice / whitePercentage) +
              upgradePrice / upgradePercentage;
            costFinalHammer[i][j + 1] =
              costFinalHammer[i][j] + whitePrice / whitePercentage;
          } else {
            costFinalHammer[i][j] =
              upgradePercentage * costFinalHammer[i + 1][j + 1] +
              (1 - upgradePercentage) * costFinalHammer[i][j + 1] +
              upgradePrice;
          }
        }
        if (actionMatrixHammer[i][j] === 'I') {
          costFinalHammer[i][j] =
            costNormal[0][0] / (1 - innocentNormal[0][0]) +
            innocentPrice / innocentPercentage;
        }
      }
    }

    for (let i = upgradeLimit; i >= 0; i--) {
      for (let j = upgradeLimit; j >= i; j--) {
        if (actionMatrixNormal[i][j] === 'U') {
          costFinalNormal[i][j] =
            upgradePercentage * costFinalNormal[i + 1][j + 1] +
            (1 - upgradePercentage) * costFinalNormal[i][j + 1] +
            upgradePrice;
        }
        if (actionMatrixNormal[i][j] === 'H') {
          costFinalNormal[i][j] =
            hammerPercentage * costFinalHammer[i][j] +
            (1 - hammerPercentage) * costFinalHammer[i][j + 1] +
            hammerPrice;
        }
        if (actionMatrixNormal[i][j] === 'I') {
          costFinalNormal[i][j] =
            costNormal[0][0] / (1 - innocentNormal[0][0]) +
            innocentPrice / innocentPercentage;
        }
      }
    }

    return costFinalNormal[0][0];
  }

  tryAll(config: {
    upgradePercentage: number;
    upgradeLimit: number;
    innocentPercentage: number;
    whitePercentage: number;
    hammerPercentage: number;
    upgradePrice: number;
    innocentPrice: number;
    whitePrice: number;
    hammerPrice: number;
  }) {
    const A = [];
    let min = 99999999;
    let minA;
    let minB;

    const getB = arr =>
      arr.map(x => {
        return {
          try: x.action === 'I' ? x.try + 1 : config.upgradeLimit + 1,
          action: x.action === 'I' ? 'I' : 'W',
        };
      });

    const recursive = (t, action, depth) => {
      A[depth] = { try: t, action: action };
      if (depth === config.upgradeLimit) {
        const B = getB(A);
        const res = this.calculateMatrix(config, A, [
          ...B,
          { try: config.upgradeLimit + 1, action: 'FINISH' },
        ]);
        if (res < min) {
          min = res;
          minA = JSON.parse(JSON.stringify(A));
          minB = JSON.parse(JSON.stringify(B));
        }
        const index = A.findIndex(x => x.action === 'H');
        B[index] = { try: A[index].try + 1, action: 'I' };
        const res2 = this.calculateMatrix(config, A, [
          ...B,
          { try: config.upgradeLimit + 1, action: 'FINISH' },
        ]);
        if (res2 < min) {
          min = res2;
          minA = JSON.parse(JSON.stringify(A));
          minB = JSON.parse(JSON.stringify(B));
        }
        return;
      }
      recursive(config.upgradeLimit, 'H', depth + 1);
      if (action === 'I' && depth + 1 < config.upgradeLimit) {
        for (let i = t + 1; i <= config.upgradeLimit; i++) {
          recursive(i, 'I', depth + 1);
        }
      }
    };

    for (let i = 1; i <= config.upgradeLimit; i++) {
      recursive(i, 'I', 0);
    }
    recursive(config.upgradeLimit, 'H', 0);

    return {
      min,
      minA,
      minB,
    };
  }
}
