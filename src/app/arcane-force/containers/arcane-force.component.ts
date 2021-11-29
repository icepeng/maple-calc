import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { CoreService } from 'src/app/core/services/core.service';

const localStorageAccessKey = 'arcaneForceForm';
@Component({
  selector: 'app-arcane-force',
  templateUrl: './arcane-force.component.html',
  styleUrls: ['./arcane-force.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcaneForceComponent implements OnInit {
  translate = {
    vanishing: '소멸의 여로',
    chewchew: '츄츄 아일랜드',
    lacheln: '레헬른',
    arcana: '아르카나',
    morass: '모라스',
    esfera: '에스페라',
  };
  colors = {
    vanishing: 'rgb(0, 119, 170)',
    chewchew: 'rgb(255, 34, 255)',
    lacheln: 'rgb(68, 17, 187)',
    arcana: 'rgb(51, 51, 119)',
    morass: 'rgb(255, 51, 102)',
    esfera: 'rgb(187, 136, 255)',
  };

  formGroup = this.getInitializedArcaneForceForm();

  selectable = 0;

  symbolChart: any = {
    tooltip: {
      trigger: 'axis',
    },
  };

  totalChart: any = {
    tooltip: {
      trigger: 'axis',
    },
  };

  left = 0;
  leftShorten = 0;
  shortest = '';

  constructor(private coreService: CoreService) {}

  ngOnInit() {
    const storedForm = this.coreService.getLocalStorage(localStorageAccessKey);

    if (storedForm) {
      this.formGroup.patchValue(storedForm);
    }
  }

  initializeArcaneForceForm() {
    this.formGroup = this.getInitializedArcaneForceForm();

    this.coreService.removeLocalStorage(localStorageAccessKey);
  }

  getInitializedArcaneForceForm() {
    return new FormGroup({
      vanishing: new FormGroup({
        level: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        growth: new FormControl(0, Validators.required),
        daily: new FormControl(22, Validators.required),
      }),
      chewchew: new FormGroup({
        level: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        growth: new FormControl(0, Validators.required),
        daily: new FormControl(23, Validators.required),
      }),
      lacheln: new FormGroup({
        level: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        growth: new FormControl(0, Validators.required),
        daily: new FormControl(0, Validators.required),
      }),
      arcana: new FormGroup({
        level: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        growth: new FormControl(0, Validators.required),
        daily: new FormControl(18, Validators.required),
      }),
      morass: new FormGroup({
        level: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        growth: new FormControl(0, Validators.required),
        daily: new FormControl(14, Validators.required),
      }),
      esfera: new FormGroup({
        level: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        growth: new FormControl(0, Validators.required),
        daily: new FormControl(14, Validators.required),
      }),
    });
  }

  getSymbolPlot(
    { level, growth, daily }: { level: number; growth: number; daily: number },
    left: number,
  ) {
    if (level === 0) {
      return;
    }
    const arr = [
      {
        level,
        growth,
      },
    ];
    for (let i = 1; i <= left; i++) {
      const required = this.getRequired(arr[i - 1].level);
      if (arr[i - 1].level === 20) {
        arr[i] = {
          level: 20,
          growth: 0,
        };
      } else if (arr[i - 1].growth + daily >= required) {
        arr[i] = {
          level: arr[i - 1].level + 1,
          growth:
            arr[i - 1].level + 1 === 20
              ? 0
              : arr[i - 1].growth + daily - required,
        };
      } else {
        arr[i] = {
          level: arr[i - 1].level,
          growth: arr[i - 1].growth + daily,
        };
      }
    }
    return arr;
  }

  getRequired(level: number) {
    return level * level + 11;
  }

  getTotal({ level, growth }: { level: number; growth: number }) {
    const mlevel = level - 1;
    return (mlevel * (2 * mlevel * mlevel + 3 * mlevel + 67)) / 6 + growth;
  }

  calculateSymbol() {
    const candidate = Object.keys(this.formGroup.value).filter(
      key => this.formGroup.value[key].level > 0,
    );
    const left = Math.max(
      ...candidate
        .map(key => this.formGroup.value[key])
        .map(x =>
          Math.floor((2679 - this.getTotal(x) + x.daily - 1) / x.daily),
        ),
    );
    this.symbolChart = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: candidate.map(key => this.translate[key]),
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: left + 1 }, (_, k) => k),
      },
      yAxis: {
        type: 'value',
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
        },
        {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 100,
        },
      ],
      series: candidate.map(key => {
        const value = this.formGroup.value[key];
        return {
          name: this.translate[key],
          type: 'line',
          step: 'start',
          data: this.getSymbolPlot(value, left).map(x => x.level),
          itemStyle: {
            color: this.colors[key],
          },
        };
      }),
    };
    this.left = left;
  }

  symbolSum(
    { level, growth, daily }: { level: number; growth: number; daily: number },
    count: number,
  ) {
    let newLevel = level;
    let newGrowth = growth + count;
    if (level === 20) {
      return {
        level: 20,
        growth: 0,
        daily: daily,
      };
    }
    while (1) {
      const required = this.getRequired(newLevel);
      if (newGrowth < required) {
        break;
      }
      newLevel += 1;
      newGrowth -= required;
    }
    return {
      level: newLevel,
      growth: newGrowth,
      daily,
    };
  }

  calculateTotal() {
    const candidate = Object.keys(this.formGroup.value).filter(
      key => this.formGroup.value[key].level > 0,
    );
    const { leftShorten, shortest } = candidate.reduce(
      (obj, key) => {
        const x = this.formGroup.value[key];
        const res = Math.floor(
          (2679 -
            this.getTotal(this.symbolSum(x, this.selectable)) +
            x.daily -
            1) /
            x.daily,
        );
        if (!obj.shortest || res > obj.leftShorten) {
          return {
            shortest: key,
            leftShorten: res,
          };
        }
        return obj;
      },
      { leftShorten: null, shortest: null },
    );
    const plainForces = candidate.reduce((obj, key) => {
      return {
        ...obj,
        [key]: this.getSymbolPlot(this.formGroup.value[key], this.left).map(
          x => x.level * 10 + 20,
        ),
      };
    }, {});
    const addedForces = candidate.reduce((obj, key) => {
      return {
        ...obj,
        [key]: this.getSymbolPlot(
          this.symbolSum(this.formGroup.value[key], this.selectable),
          this.left,
        ).map(x => x.level * 10 + 20),
      };
    }, {});
    this.totalChart = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: candidate.map(key => this.translate[key]),
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: this.left + 1 }, (_, k) => k),
      },
      yAxis: {
        type: 'value',
        min: 'dataMin',
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
        },
        {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 100,
        },
      ],
      series: candidate.map(key => {
        const value = this.formGroup.value[key];
        return {
          name: this.translate[key],
          type: 'line',
          step: 'start',
          data: candidate.reduce((arr, x) => {
            if (x === key) {
              return arr;
            }
            return arr.map((y, i) => y + plainForces[x][i]);
          }, addedForces[key]),
          itemStyle: {
            color: this.colors[key],
          },
        };
      }),
    };
    this.leftShorten = leftShorten;
    this.shortest = this.translate[shortest];
  }

  onStepChange(event: StepperSelectionEvent) {
    this.symbolChart = {};
    this.totalChart = {};
    if (event.selectedIndex === 1) {
      this.calculateSymbol();
    }
    if (event.selectedIndex === 2) {
      this.calculateTotal();
    }
  }

  saveForm() {
    const data = { ...this.formGroup.value };

    this.coreService.setLocalStorage(localStorageAccessKey, data);
  }
}
