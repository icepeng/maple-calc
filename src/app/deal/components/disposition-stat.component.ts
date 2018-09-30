import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Stat } from '../models/stat.model';
import { StatService } from '../services/stat.service';
import { startWith } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-disposition-stat',
  templateUrl: './disposition-stat.component.html',
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
export class DispositionStatComponent implements OnInit {
  formGroup = new FormGroup({
    charisma: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    sensivity: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    dexterity: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    will: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    insight: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    charm: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
  });

  stat: Partial<Stat> = {};

  constructor(private statService: StatService) {}

  ngOnInit() {
    this.formGroup.valueChanges
      .pipe(startWith(this.formGroup.value))
      .subscribe(form => {
        this.stat = this.statService.convertDisposition(form);
      });
  }
}
