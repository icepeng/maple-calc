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

      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }

      .form-fields {
        display: flex;
        flex-wrap: wrap;
      }

      .form-fields mat-form-field {
        margin-right: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealComponent implements OnInit {
  availableJobs = Object.values(jobEntities);

  job = new FormControl(null);
  level = new FormControl(200);
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
  hyperStatLeft$: Observable<number>;
  levelStat$: Observable<Partial<Stat>>;

  constructor(private statService: StatService) {}

  ngOnInit() {
    this.hyperStatLeft$ = this.level.valueChanges.pipe(
      startWith(200),
      combineLatest(this.hyperStatForm.valueChanges),
      map(([level, hyperStat]) =>
        this.statService.getHyperStatLeft(level, hyperStat),
      ),
    );
    this.levelStat$ = this.statService.getLevelStat()
  }
}
