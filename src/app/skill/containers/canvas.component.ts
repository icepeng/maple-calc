import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, forkJoin, Subject } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { CanvasService } from '../canvas.service';
import { LayerService } from '../layer.service';
import { CanvasSetting } from '../models/canvas-setting';
import { Layer } from '../models/layer';
import { skillRecord } from '../models/skill-data';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styles: [
    `
      canvas {
        border: 1px solid black;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private images: Record<string, HTMLImageElement> = {};

  isDrag = false;
  redraw$ = new Subject<string>();
  zoom = 1;

  constructor(
    private canvasService: CanvasService,
    private layerService: LayerService,
  ) {}

  async ngOnInit() {
    combineLatest([
      this.layerService.layers$,
      this.canvasService.setting$,
      this.redraw$,
    ])
      .pipe(
        delayWhen(([layers]) =>
          forkJoin(
            layers.map(layer =>
              this.loadImage(skillRecord[layer.skill].location),
            ),
          ),
        ),
      )
      .subscribe(([layers, setting]) => this.draw(layers, setting));

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.font = '500 22px Noto sans KR';
    this.ctx.translate(683, 600);

    await this.loadImage('assets/chtr.png');
    this.redraw$.next('init');

    this.canvas.nativeElement.onmousedown = e => {
      this.isDrag = true;
    };

    this.canvas.nativeElement.onmousemove = e => {
      if (!this.isDrag) {
        return;
      }
      this.ctx.translate(e.movementX, e.movementY);
      this.redraw$.next('pan');
    };

    this.canvas.nativeElement.onmouseup = e => {
      this.isDrag = false;
    };

    this.canvas.nativeElement.onwheel = e => {
      e.preventDefault();
      const zoom =
        e.deltaY > 0
          ? Math.max(this.zoom - 0.05, 0.5)
          : Math.min(this.zoom + 0.05, 1);
      this.ctx.scale(zoom / this.zoom, zoom / this.zoom);
      this.zoom = zoom;

      this.redraw$.next('zoom');
    };
  }

  private loadImage(location: string) {
    if (this.images[location] && this.images[location].complete) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.images[location] = new Image();
      this.images[location].onload = () => resolve(this.images[location]);
      this.images[location].onerror = err => reject(err);
      this.images[location].src = location;
    });
  }

  draw(layers: Layer[], setting: CanvasSetting) {
    const transform = this.ctx.getTransform();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.drawInit(setting);
    if (setting.showGrid) {
      this.drawGrid(transform);
    }
    this.ctx.setTransform(transform);

    const toDraw = layers
      .filter(x => x.visible)
      .slice()
      .reverse();
    for (const layer of toDraw) {
      this.drawSkill(layer);
    }
    for (const layer of toDraw) {
      this.drawSkillRect(layer);
    }
    this.drawChtr();
  }

  drawInit(setting: CanvasSetting) {
    if (setting.background === '투명') {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    } else {
      this.ctx.fillStyle = setting.background;
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.fillStyle = 'black';
    }
    this.ctx.textAlign = 'end';
    this.ctx.textBaseline = 'bottom';
    this.ctx.fillText(
      `${this.zoom.toFixed(2)}x`,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    );
  }

  drawGrid(transform: DOMMatrix) {
    const { a: zoom, e: translateX, f: translateY } = transform;
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.strokeStyle = '#ccc';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([2]);
    this.ctx.beginPath();
    for (
      let x = translateX % (100 * zoom);
      x <= this.ctx.canvas.width;
      x += 100 * zoom
    ) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.ctx.canvas.height);
    }
    for (
      let y = translateY % (100 * zoom);
      y <= this.ctx.canvas.height;
      y += 100 * zoom
    ) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.ctx.canvas.width, y);
    }
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.setLineDash([]);
    this.ctx.translate(translateX, translateY);
    this.ctx.restore();
  }

  drawImage(
    location: string,
    originX: number,
    originY: number,
    alpha: number = 1,
    scale: number = 100,
  ) {
    const img = this.images[location];
    this.ctx.globalAlpha = alpha;
    this.ctx.drawImage(
      img,
      -(originX * scale) / 100,
      -(originY * scale) / 100,
      (img.width * scale) / 100,
      (img.height * scale) / 100,
    );
    this.ctx.globalAlpha = 1;
  }

  drawSkill(layer: Layer) {
    const skill = skillRecord[layer.skill];
    this.drawImage(
      skill.location,
      skill.origin.x,
      skill.origin.y,
      layer.alpha,
      skill.scale,
    );
  }

  drawSkillRect(layer: Layer) {
    const skill = skillRecord[layer.skill];
    this.ctx.strokeStyle = layer.color;
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = layer.color;
    this.ctx.strokeRect(
      skill.lt.x,
      skill.lt.y,
      skill.rb.x - skill.lt.x,
      skill.rb.y - skill.lt.y,
    );
    if (skill.lt2) {
      this.ctx.strokeRect(
        skill.lt2.x,
        skill.lt2.y,
        skill.rb2.x - skill.lt2.x,
        skill.rb2.y - skill.lt2.y,
      );
    }
    if (skill.lt3) {
      this.ctx.strokeRect(
        skill.lt3.x,
        skill.lt3.y,
        skill.rb3.x - skill.lt3.x,
        skill.rb3.y - skill.lt3.y,
      );
    }
    if (skill.hit_lt) {
      this.ctx.setLineDash([6]);
      this.ctx.strokeRect(
        skill.hit_lt.x,
        skill.hit_lt.y,
        skill.hit_rb.x - skill.hit_lt.x,
        skill.hit_rb.y - skill.hit_lt.y,
      );
      this.ctx.setLineDash([]);
    }
    if (layer.namePosition === '좌측 상단') {
      this.ctx.textAlign = 'start';
      this.ctx.textBaseline = 'bottom';
      this.ctx.fillText(skill.name, skill.lt.x, skill.lt.y - 5);
    } else if (layer.namePosition === '우측 상단') {
      this.ctx.textAlign = 'end';
      this.ctx.textBaseline = 'bottom';
      this.ctx.fillText(skill.name, skill.rb.x, skill.lt.y - 5);
    } else if (layer.namePosition === '좌측 하단') {
      this.ctx.textAlign = 'start';
      this.ctx.textBaseline = 'top';
      this.ctx.fillText(skill.name, skill.lt.x, skill.rb.y + 5);
    } else if (layer.namePosition === '우측 하단') {
      this.ctx.textAlign = 'end';
      this.ctx.textBaseline = 'top';
      this.ctx.fillText(skill.name, skill.rb.x, skill.rb.y + 5);
    }
    this.ctx.strokeStyle = 'black';
    this.ctx.fillStyle = 'black';
  }

  drawChtr() {
    this.drawImage('assets/chtr.png', 42, 60);
  }
}
