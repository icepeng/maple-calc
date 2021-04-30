import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CanvasSetting } from './models/canvas-setting';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  private _setting$ = new BehaviorSubject<CanvasSetting>({
    background: '투명',
    showGrid: true,
  });
  setting$ = this._setting$.asObservable();

  constructor() {}

  dispatch(setting: CanvasSetting) {
    this._setting$.next(setting);
  }
}
