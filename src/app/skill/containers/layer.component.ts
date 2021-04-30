import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LayerService } from '../layer.service';
import { Layer, NamePosition } from '../models/layer';
import { SkillData } from '../models/skill-data';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styles: [
    `
      .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 388px;
      }
      .layer-container {
        max-height: 720px;
        border: solid 1px #ccc;
        display: block;
        background: white;
        border-radius: 0px 0px 4px;
        overflow-y: scroll;
      }
      .layer {
        padding: 20px 10px;
        border-bottom: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        background: white;
        font-size: 14px;
      }
      .layer:last-child {
        border: none;
      }
      .layer-title {
        margin-right: -24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        margin-bottom: 12px;
      }
      .content {
        flex: 1 1 auto;
      }
      .delete {
        cursor: pointer;
      }
      .mat-stroked-button {
        width: 112px;
        margin-right: 8px;
      }
      .mat-slide-toggle {
        margin-right: 8px;
      }
      .color-input {
        width: 108px;
        margin-right: 8px;
        border: none;
        border-bottom: 1px solid black;
      }
      .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 40px;
      }
      .column {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 50%;
        padding-right: 16px;
      }
      .handle {
        color: #ccc;
        cursor: move;
        width: 24px;
        height: 24px;
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }
      .cdk-drag-placeholder {
        opacity: 0;
      }
      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      .layer-container.cdk-drop-list-dragging
        .layer:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayerComponent implements OnInit {
  layers$ = this.layerService.layers$;
  isEmpty$ = this.layers$.pipe(map(layers => layers.length === 0));

  palette = [
    '#000000',
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
  ];

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {}

  dropLayer(event: CdkDragDrop<SkillData[]>) {
    this.layerService.dropLayer(event);
  }

  deleteLayer(index: number) {
    this.layerService.deleteLayer(index);
  }

  setLayerColor(index: number, color: string) {
    this.layerService.setLayerColor(index, color);
  }

  setLayerNamePosition(index: number, pos: NamePosition) {
    this.layerService.setLayerNamePosition(index, pos);
  }

  setLayerAlpha(index: number, alpha: number) {
    this.layerService.setLayerAlpha(index, alpha);
  }

  setLayerVisible(index: number, visible: boolean) {
    this.layerService.setLayerVisible(index, visible);
  }

  trackByFn(index: number, item: Layer) {
    return item.skill;
  }
}
