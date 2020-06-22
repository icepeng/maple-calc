import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../../core/services/core.service';
import * as math from 'mathjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const localStorageAccessKey = 'upgradeForm';
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradeComponent implements OnInit {
  formGroup = this.getInitializedUpgradeForm();

  innocentMean: number;
  innocentChart = {
    color: ['#FF4081'],
    grid: {
      left: 50,
      top: 20,
      right: 0,
      bottom: 60,
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: { type: 'value' },
    series: [{ name: 'bar', type: 'bar', data: [], markLine: {} }],
    tooltip: {},
  };

  whiteMean: number;
  whiteChart = {
    color: ['#FF4081'],
    grid: {
      left: 50,
      top: 20,
      right: 0,
      bottom: 30,
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: { type: 'value' },
    series: [{ name: 'bar', type: 'bar', data: [], markLine: {} }],
    tooltip: {},
  };

  hammerMean: number;
  hammerChart = {
    color: ['#FF4081'],
    grid: {
      left: 50,
      top: 20,
      right: 0,
      bottom: 30,
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: { type: 'value' },
    series: [{ name: 'bar', type: 'bar', data: [] }],
    tooltip: {},
  };

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private coreService: CoreService,
  ) {
    const storedForm = coreService.getLocalStorage(localStorageAccessKey);

    if (storedForm) {
      coreService.setFormGroup(this.formGroup, storedForm);
    }
  }

  ngOnInit() {}

  initializeUpgradeForm() {
    this.formGroup = this.getInitializedUpgradeForm();

    this.coreService.removeLocalStorage(localStorageAccessKey);
  }

  getInitializedUpgradeForm() {
    return new FormGroup({
      upgradePercentage: new FormControl(0.39, Validators.required),
      upgradeLimit: new FormControl(8, Validators.required),
      innocentPercentage: new FormControl(0.45, Validators.required),
      whitePercentage: new FormControl(0.1, Validators.required),
      hammerPercentage: new FormControl(0.5, Validators.required),
      innocentLimit: new FormControl(4, Validators.required),
      isBeforeHammer: new FormControl(true, Validators.required),
    });
  }

  getData() {
    return {
      ...this.init({
        upgradeLimit: +this.formGroup.value.upgradeLimit,
        upgradePercentage: +this.formGroup.value.upgradePercentage,
      }),
      innocentPercentage: +this.formGroup.value.innocentPercentage,
      whitePercentage: +this.formGroup.value.whitePercentage,
      innocentLimit: +this.formGroup.value.innocentLimit,
      hammerPercentage: +this.formGroup.value.hammerPercentage,
      isBeforeHammer: this.formGroup.value.isBeforeHammer,
    };
  }

  calculate() {
    const data = this.getData();

    this.innocentMean = this.getInnocentMean(data);
    this.whiteMean = this.getWhiteMean(data);
    this.hammerMean = this.getHammerMean(data);
    this.updateInnocentChart(data);
    this.updateWhiteChart(data);
    this.updateHammerChart(data);
  }

  updateInnocentChart(data) {
    let sum = 0;
    const xAxis = [];
    const series = [];
    let innocent50 = 0;
    let innocent90 = 0;
    let innocent95 = 0;
    for (let i = 0; sum < 0.999; i++) {
      xAxis[i] = i;
      series[i] = this.getInnocentProb(i, data);
      sum += series[i];
      if (!innocent50 && sum >= 0.5) {
        innocent50 = i;
      }
      if (!innocent90 && sum >= 0.9) {
        innocent90 = i;
      }
      if (!innocent95 && sum >= 0.95) {
        innocent95 = i;
      }
    }
    this.innocentChart = {
      color: ['#FF4081'],
      grid: {
        left: 50,
        top: 20,
        right: 0,
        bottom: 60,
      },
      xAxis: {
        type: 'category',
        data: xAxis,
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Innocent',
          type: 'bar',
          data: series,
          markLine: {
            lineStyle: {
              color: '#3f51b5',
            },
            data: [
              {
                label: {
                  formatter: 'Avg',
                },
                xAxis: this.innocentMean,
              },
              {
                label: {
                  formatter: '50%',
                },
                xAxis: innocent50,
              },
              {
                label: {
                  formatter: '90%',
                },
                xAxis: innocent90,
              },
              {
                label: {
                  formatter: '95%',
                },
                xAxis: innocent95,
              },
            ],
          },
        },
      ],
      tooltip: {},
    };
  }

  updateWhiteChart(data) {
    let sum = 0;
    const xAxis = [];
    const series = [];
    let white50 = 0;
    let white90 = 0;
    let white95 = 0;
    for (let i = 0; sum < 0.999; i++) {
      xAxis[i] = i;
      series[i] = this.getWhiteProb(i, data);
      sum += series[i];
      if (!white50 && sum >= 0.5) {
        white50 = i;
      }
      if (!white90 && sum >= 0.9) {
        white90 = i;
      }
      if (!white95 && sum >= 0.95) {
        white95 = i;
      }
    }
    this.whiteChart = {
      color: ['#FF4081'],
      grid: {
        left: 50,
        top: 20,
        right: 0,
        bottom: 60,
      },
      xAxis: {
        type: 'category',
        data: xAxis,
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'White',
          type: 'bar',
          data: series,
          markLine: {
            lineStyle: {
              color: '#3f51b5',
            },
            data: [
              {
                label: {
                  formatter: 'Avg',
                },
                xAxis: this.whiteMean,
              },
              {
                label: {
                  formatter: '50%',
                },
                xAxis: white50,
              },
              {
                label: {
                  formatter: '90%',
                },
                xAxis: white90,
              },
              {
                label: {
                  formatter: '95%',
                },
                xAxis: white95,
              },
            ],
          },
        },
      ],
      tooltip: {},
    };
  }

  updateHammerChart(data) {
    let sum = 0;
    const xAxis = [];
    const series = [];
    for (let i = 1; sum < 0.999; i++) {
      xAxis[i - 1] = i;
      series[i - 1] = this.getHammerProb(i, data);
      sum += series[i - 1];
    }
    this.hammerChart = {
      color: ['#FF4081'],
      grid: {
        left: 50,
        top: 20,
        right: 0,
        bottom: 60,
      },
      xAxis: {
        type: 'category',
        data: xAxis,
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'hammer',
          type: 'bar',
          data: series,
        },
      ],
      tooltip: {},
    };
  }

  init({ upgradeLimit, upgradePercentage }) {
    const upgradeBinom = [];
    const upgradeBinomCum = [];
    for (let i = 0; i <= upgradeLimit; i++) {
      upgradeBinom[i] =
        math.pow(1 - upgradePercentage, upgradeLimit - i) *
        math.pow(upgradePercentage, i) *
        math.combinations(upgradeLimit, i);
    }
    for (let i = 0; i <= upgradeLimit; i++) {
      upgradeBinomCum[i] = 0;
      for (let j = i; j <= upgradeLimit; j++) {
        upgradeBinomCum[i] += upgradeBinom[j];
      }
    }
    return {
      upgradeLimit,
      upgradePercentage,
      upgradeBinomCum,
      upgradeBinom,
    };
  }

  getInnocentProb(
    i,
    {
      upgradeBinom,
      upgradeBinomCum,
      innocentLimit,
      innocentPercentage,
      upgradePercentage,
      hammerPercentage,
      isBeforeHammer,
    },
  ) {
    const p =
      upgradeBinomCum[innocentLimit] +
      (isBeforeHammer
        ? upgradeBinom[innocentLimit - 1] * hammerPercentage * upgradePercentage
        : 0);
    if (i === 0) {
      return p;
    }
    const q = 1 - p;
    const k = innocentPercentage;
    return p * q * k * math.pow(1 - p * k, i - 1);
  }

  getInnocentMean({
    upgradeBinom,
    upgradeBinomCum,
    innocentLimit,
    innocentPercentage,
    upgradePercentage,
    hammerPercentage,
    isBeforeHammer,
  }) {
    const p =
      upgradeBinomCum[innocentLimit] +
      (isBeforeHammer
        ? upgradeBinom[innocentLimit - 1] * hammerPercentage * upgradePercentage
        : 0);
    const q = 1 - p;
    const k = innocentPercentage;
    return q / (p * k);
  }

  getWhiteProb(
    i,
    {
      upgradeBinom,
      upgradeBinomCum,
      upgradePercentage,
      upgradeLimit,
      innocentLimit,
      whitePercentage,
      hammerPercentage,
      isBeforeHammer,
    },
  ) {
    const total = isBeforeHammer
      ? upgradeBinomCum[innocentLimit] +
        upgradeBinom[innocentLimit - 1] * hammerPercentage * upgradePercentage
      : upgradeBinomCum[innocentLimit];
    const p = upgradePercentage * hammerPercentage;
    const q = 1 - p;
    const rate = upgradePercentage * whitePercentage;
    if (i === 0) {
      return (upgradeBinom[upgradeLimit] / total) * p;
    }
    let sum = 0;
    for (let j = 1; j <= upgradeLimit - innocentLimit + 1; j++) {
      const prob = upgradeBinom[upgradeLimit - j + 1] / total;
      if (i >= j) {
        sum +=
          q *
          prob *
          math.combinations(i - 1, j - 1) *
          math.pow(rate, j) *
          math.pow(1 - rate, i - j);
      }
      if (j >= 2 && i >= j - 1) {
        sum +=
          p *
          prob *
          math.combinations(i - 1, j - 2) *
          math.pow(rate, j - 1) *
          math.pow(1 - rate, i - j + 1);
      }
    }
    if (i >= upgradeLimit - innocentLimit + 1 && isBeforeHammer) {
      sum +=
        ((upgradeBinom[innocentLimit - 1] *
          hammerPercentage *
          upgradePercentage) /
          total) *
        math.combinations(i - 1, upgradeLimit - innocentLimit) *
        math.pow(rate, upgradeLimit - innocentLimit + 1) *
        math.pow(1 - rate, i - upgradeLimit + innocentLimit - 1);
    }
    return sum;
  }

  getWhiteMean({
    upgradeBinom,
    upgradeBinomCum,
    upgradePercentage,
    upgradeLimit,
    innocentLimit,
    whitePercentage,
    hammerPercentage,
    isBeforeHammer,
  }) {
    const hammerLeft = upgradeBinomCum[innocentLimit];
    const hammerUsed =
      upgradeBinom[innocentLimit - 1] * hammerPercentage * upgradePercentage;

    let sum = 0;
    for (let j = 1; j <= upgradeLimit - innocentLimit + 1; j++) {
      sum +=
        (upgradeBinom[upgradeLimit - j + 1] / upgradeBinomCum[innocentLimit]) *
        j;
    }
    sum /= upgradePercentage * whitePercentage;
    sum -= hammerPercentage / whitePercentage;
    return isBeforeHammer
      ? (sum * hammerLeft +
          (hammerUsed * (upgradeLimit - innocentLimit + 1)) /
            (upgradePercentage * whitePercentage)) /
          (hammerLeft + hammerUsed)
      : sum;
  }

  getHammerProb(
    i,
    {
      upgradeBinom,
      upgradeBinomCum,
      innocentLimit,
      upgradePercentage,
      hammerPercentage,
      isBeforeHammer,
    },
  ) {
    if (!isBeforeHammer) {
      return i === 1 ? 1 : 0;
    }
    const p =
      upgradeBinomCum[innocentLimit] +
      (isBeforeHammer
        ? upgradeBinom[innocentLimit - 1] * hammerPercentage * upgradePercentage
        : 0);
    return (
      (p / upgradeBinomCum[innocentLimit - 1]) *
      math.pow(1 - p / upgradeBinomCum[innocentLimit - 1], i - 1)
    );
  }

  getHammerMean({
    upgradeBinom,
    upgradeBinomCum,
    innocentLimit,
    upgradePercentage,
    hammerPercentage,
    isBeforeHammer,
  }) {
    if (!isBeforeHammer) {
      return 1;
    }
    const p =
      upgradeBinomCum[innocentLimit] +
      upgradeBinom[innocentLimit - 1] * hammerPercentage * upgradePercentage;
    return upgradeBinomCum[innocentLimit - 1] / p;
  }

  saveForm() {
    const data = { ...this.getData() };

    delete data.upgradeBinom;
    delete data.upgradeBinomCum;

    this.coreService.setLocalStorage(localStorageAccessKey, data);
  }
}
