import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HyperStat } from '../models/charcacter.model';
import { Stat } from '../models/stat.model';
import { StatService } from '../services/stat.service';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-hyper-stat',
  templateUrl: './hyper-stat.component.html',
  styles: [
    `
      mat-card {
        margin: 12px;
        flex: 1;
      }

      mat-form-field {
        margin-right: 12px;
      }

      .wrapper {
        display: flex;
      }

      mat-card {
        max-width: 520px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HyperStatComponent implements OnInit, OnChanges {
  @Input()
  level: number;

  hyperStatForm = new FormGroup({
    STR: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    DEX: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    INT: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    LUK: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    maxHP: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    maxMP: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    DFTF: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    criticalRate: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    criticalDamage: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    ignoreDefense: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    totalDamage: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    bossDamage: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    stance: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    moveSpeed: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    jumpPower: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    ccImmune: new FormControl(0, [Validators.min(0), Validators.max(10)]),
    elementImmune: new FormControl(0, [Validators.min(0), Validators.max(10)]),
  });
  stat: Partial<Stat>;

  total: number;
  used = 0;

  constructor(private statService: StatService) {}

  ngOnInit() {
    this.hyperStatForm.valueChanges
      .pipe(startWith(this.hyperStatForm.value))
      .subscribe((hyperStat: HyperStat) => {
        const POINT_TABLE = [0, 1, 3, 7, 15, 25, 40, 60, 85, 115, 150];
        this.used = Object.values(hyperStat).reduce(
          (sum, x) => sum + POINT_TABLE[x],
          0,
        );
        this.stat = this.statService.convertHyperStat(hyperStat);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.level) {
      return;
    }
    if (this.level < 140) {
      this.total = 0;
      return;
    }
    let total = 0;
    for (let i = 140; i <= this.level; i++) {
      total += Math.floor((i - 140) / 10) + 3;
    }
    this.total = total;
  }
}
