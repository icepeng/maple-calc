import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-canvas-setting',
  templateUrl: './canvas-setting.component.html',
  styles: [
    `
      .canvas-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: white;
        border: solid 1px #ccc;
        border-radius: 0px 0px 4px;
        padding: 20px 10px;
        font-size: 14px;
      }
      .control {
        margin-right: 12px;
      }
      .label {
        margin-right: 12px;
      }
      .vcenter {
        display: flex;
        align-items: center;
      }
      .color-box {
        width: 16px;
        height: 16px;
        margin-left: 8px;
        border: 1px solid black;
      }

      mat-select {
        width: 160px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasSettingComponent implements OnInit {
  formGroup = new FormGroup({
    background: new FormControl(),
    showGrid: new FormControl(),
  });

  backgrounds = ['투명', '#ffffff', '#fafafa', '#000000'];

  constructor(private canvasService: CanvasService) {}

  ngOnInit(): void {
    this.canvasService.setting$
      .pipe(take(1))
      .subscribe(setting =>
        this.formGroup.setValue(setting, { emitEvent: false }),
      );
    this.formGroup.valueChanges.subscribe(form =>
      this.canvasService.dispatch(form),
    );
  }
}
