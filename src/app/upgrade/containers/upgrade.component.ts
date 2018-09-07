import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as math from 'mathjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpgradeComponent implements OnInit {
  formGroup = new FormGroup({
    upgradePercentage: new FormControl(0.39, Validators.required),
    upgradeLimit: new FormControl(8, Validators.required),
    innocentPercentage: new FormControl(0.45, Validators.required),
    whitePercentage: new FormControl(0.1, Validators.required),
    innocentLimit: new FormControl(4, Validators.required),
  });

  innocentMean: number;
  innocentChart = {
    color: ['#FF4081'],
    grid: {
      left: 50,
      top: 10,
      right: 0,
      bottom: 60,
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: { type: 'value' },
    series: [{ name: 'bar', type: 'bar', data: [] }],
    tooltip: {},
  };

  whiteMean: number;
  whiteChart = {
    color: ['#FF4081'],
    grid: {
      left: 50,
      top: 10,
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

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  calculate() {
    const data = {
      ...this.init({
        upgradeLimit: +this.formGroup.value.upgradeLimit,
        upgradePercentage: +this.formGroup.value.upgradePercentage,
      }),
      innocentPercentage: +this.formGroup.value.innocentPercentage,
      whitePercentage: +this.formGroup.value.whitePercentage,
      innocentLimit: +this.formGroup.value.innocentLimit,
    };
    this.innocentMean = this.getInnocentMean(data);
    this.whiteMean = this.getWhiteMean(data);
    this.updateInnocentChart(data);
    this.updateWhiteChart(data);
  }

  updateInnocentChart(data) {
    let sum = 0;
    const xAxis = [];
    const series = [];
    for (let i = 0; sum < 0.999; i++) {
      xAxis[i] = i;
      series[i] = this.getInnocentProb(i, data);
      sum += series[i];
    }
    this.innocentChart = {
      color: ['#FF4081'],
      grid: {
        left: 50,
        top: 10,
        right: 0,
        bottom: 60,
      },
      xAxis: {
        type: 'category',
        data: xAxis,
      },
      yAxis: { type: 'value' },
      series: [{ name: 'bar', type: 'bar', data: series }],
      tooltip: {},
    };
  }

  updateWhiteChart(data) {
    let sum = 0;
    const xAxis = [];
    const series = [];
    for (let i = 0; sum < 0.999; i++) {
      xAxis[i] = i;
      series[i] = this.getWhiteProb(i, data);
      sum += series[i];
    }
    this.whiteChart = {
      color: ['#FF4081'],
      grid: {
        left: 50,
        top: 10,
        right: 0,
        bottom: 60,
      },
      xAxis: {
        type: 'category',
        data: xAxis,
      },
      yAxis: { type: 'value' },
      series: [{ name: 'bar', type: 'bar', data: series }],
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

  getInnocentProb(i, { upgradeBinomCum, innocentLimit, innocentPercentage }) {
    const p = upgradeBinomCum[innocentLimit];
    if (i === 0) {
      return p;
    }
    const q = 1 - p;
    const k = innocentPercentage;
    return p * q * k * math.pow(1 - p * k, i - 1);
  }

  getInnocentMean({ upgradeBinomCum, innocentLimit, innocentPercentage }) {
    const p = upgradeBinomCum[innocentLimit];
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
    },
  ) {
    const p = upgradePercentage;
    const q = 1 - p;
    const rate = p * whitePercentage;
    if (i === 0) {
      return (upgradeBinom[upgradeLimit] / upgradeBinomCum[innocentLimit]) * p;
    }
    let sum = 0;
    for (let j = 1; j <= upgradeLimit - innocentLimit + 1; j++) {
      const prob =
        upgradeBinom[upgradeLimit - j + 1] / upgradeBinomCum[innocentLimit];
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
    return sum;
  }

  getWhiteMean({
    upgradeBinom,
    upgradeBinomCum,
    upgradePercentage,
    upgradeLimit,
    innocentLimit,
    whitePercentage,
  }) {
    const p = upgradePercentage;
    const q = 1 - p;
    const rate = p * whitePercentage;
    let sum = 0;
    for (let j = innocentLimit; j <= upgradeLimit; j++) {
      const prob = upgradeBinom[j] / upgradeBinomCum[innocentLimit];
      const k = upgradeLimit + 1 - j;
      sum += (q * prob * k) / rate;
      sum += (p * prob * (k - 1)) / rate;
    }
    return sum;
  }
}
