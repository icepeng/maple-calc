import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Layer, NamePosition } from '../../models/layer';
import { SkillData, skillData, skillRecord } from '../../models/skill-data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private images: Record<string, HTMLImageElement> = {};

  layers: Layer[] = [];

  mouseX = 0;
  mouseY = 0;
  translateX = 0;
  translateY = 0;
  isDrag = false;

  formGroup = new FormGroup({
    job: new FormControl(''),
    skill: new FormControl(''),
  });
  skillList = skillData;

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

  constructor() {}

  async ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.font = '500 22px Noto sans KR';
    this.ctx.translate(640, 640);
    this.translateX = 640;
    this.translateY = 640;

    await this.loadImage('assets/chtr.png');
    this.draw();

    this.canvas.nativeElement.onmousedown = e => {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
      this.isDrag = true;
    };

    this.canvas.nativeElement.onmousemove = e => {
      if (!this.isDrag) {
        return;
      }
      const dx = e.offsetX - this.mouseX;
      const dy = e.offsetY - this.mouseY;
      this.ctx.translate(dx, dy);
      this.translateX += dx;
      this.translateY += dy;
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;

      this.draw();
    };

    this.canvas.nativeElement.onmouseup = e => {
      this.isDrag = false;
    };

    this.formGroup.valueChanges.subscribe(form => {
      this.updateSkillList();
    });
  }

  private loadImage(location: string) {
    if (this.images[location] && this.images[location].complete) {
      return;
    }
    return new Promise((resolve, reject) => {
      this.images[location] = new Image();
      this.images[location].onload = () => resolve(this.images[location]);
      this.images[location].onerror = err => reject(err);
      this.images[location].src = location;
    });
  }

  private updateSkillList() {
    this.skillList = skillData.filter(
      s =>
        s.job.includes(this.formGroup.value.job) &&
        s.name.includes(this.formGroup.value.skill) &&
        !this.layers.find(x => x.skill === s.name),
    );
  }

  dropLayer(event: CdkDragDrop<SkillData[]>) {
    moveItemInArray(this.layers, event.previousIndex, event.currentIndex);
    this.draw();
  }

  async addLayer(skill: SkillData) {
    if (this.layers.find(layer => layer.skill === skill.name)) {
      return;
    }
    this.layers.push({
      skill: skill.name,
      namePosition: '좌측 상단',
      alpha: 0.5,
      color: '#000000',
      visible: true,
    });
    this.updateSkillList();
    await this.loadImage(skill.location);
    this.draw();
  }

  deleteLayer(layer: Layer) {
    this.layers = this.layers.filter(x => x.skill !== layer.skill);
    this.updateSkillList();
    this.draw();
  }

  setLayerColor(layer: Layer, color: string) {
    layer.color = color;
    this.draw();
  }

  setLayerNamePosition(layer: Layer, pos: NamePosition) {
    layer.namePosition = pos;
    this.draw();
  }

  setLayerAlpha(layer: Layer, alpha: number) {
    layer.alpha = alpha;
    this.draw();
  }

  setLayerVisible(layer: Layer, visible: boolean) {
    layer.visible = visible;
    this.draw();
  }

  draw() {
    const layers = this.layers
      .filter(x => x.visible)
      .slice()
      .reverse();
    this.ctx.clearRect(
      -this.translateX,
      -this.translateY,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    );
    for (const layer of layers) {
      this.drawSkill(layer);
    }
    for (const layer of layers) {
      this.drawSkillRect(layer);
    }
    this.drawChtr();
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
