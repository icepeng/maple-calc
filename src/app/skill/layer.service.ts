import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Layer, NamePosition } from './models/layer';
import { SkillData } from './models/skill-data';

@Injectable({
  providedIn: 'root',
})
export class LayerService {
  private _layers$ = new BehaviorSubject<Layer[]>([]);
  layers$ = this._layers$.asObservable();

  constructor() {}

  dropLayer(event: CdkDragDrop<SkillData[]>) {
    const layers = [...this._layers$.getValue()];
    moveItemInArray(layers, event.previousIndex, event.currentIndex);
    this._layers$.next(layers);
  }

  addLayer(skill: SkillData) {
    const layers = this._layers$.getValue();
    if (layers.find(layer => layer.skill === skill.name)) {
      return;
    }
    this._layers$.next([
      {
        skill: skill.name,
        namePosition: '좌측 상단',
        alpha: 0.5,
        color: '#000000',
        visible: true,
      },
      ...layers,
    ]);
  }

  deleteLayer(index: number) {
    const layers = this._layers$.getValue();
    this._layers$.next([...layers.slice(0, index), ...layers.slice(index + 1)]);
  }

  private setLayerAttr(index: number, attr: string, value: unknown) {
    const layers = this._layers$.getValue();
    this._layers$.next([
      ...layers.slice(0, index),
      {
        ...layers[index],
        [attr]: value,
      },
      ...layers.slice(index + 1),
    ]);
  }

  setLayerColor(index: number, color: string) {
    this.setLayerAttr(index, 'color', color);
  }

  setLayerNamePosition(index: number, pos: NamePosition) {
    this.setLayerAttr(index, 'namePosition', pos);
  }

  setLayerAlpha(index: number, alpha: number) {
    this.setLayerAttr(index, 'alpha', alpha);
  }

  setLayerVisible(index: number, visible: boolean) {
    this.setLayerAttr(index, 'visible', visible);
  }
}
