import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { JOB_CODE } from '../models/job.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Stat } from '../models/stat.model';
import { startWith } from 'rxjs/operators';
import { StatService } from '../services/stat.service';

@Component({
  selector: 'app-arcane-symbol-stat',
  templateUrl: './arcane-symbol-stat.component.html',
  styles: [
    `
      mat-card {
        margin: 12px;
        flex: 1;
      }

      .wrapper {
        display: flex;
      }

      .symbol-grid {
        display: flex;
        flex-direction: column;
      }

      .symbol-grid-row {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

      .symbol-grid-cell {
        width: 100%;
        margin: 8px;
        padding: 12px;
        border: 1px solid rgba(0, 0, 0, 0.12);
      }

      .symbol-grid-cell mat-form-field {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcaneSymbolStatComponent implements OnInit {
  @Input()
  job: JOB_CODE;

  formGroup = new FormGroup({
    vanishing: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
    chewchew: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
    lacheln: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
    arcana: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
    morass: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
    esfera: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(20),
    ]),
  });

  stat: Partial<Stat> = {};

  constructor(private statService: StatService) {}

  ngOnInit() {
    this.formGroup.valueChanges
      .pipe(startWith(this.formGroup.value))
      .subscribe(form => {
        this.stat = this.statService.convertArcaneSymbols(this.job, form);
      });
  }
}
