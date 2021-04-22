import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SkillData, skillData, skillEntries } from '../../skill-data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [
    `
      .wrapper {
        margin: 20px;
      }
      form {
        width: 1280px;
      }
      canvas {
        border: 1px solid black;
      }
      .container {
        width: 1280px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 12px;
        column-gap: 12px;
      }
      .half {
        width: 50%;
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private images: Record<string, HTMLImageElement> = {};

  mouseX = 0;
  mouseY = 0;
  translateX = 0;
  translateY = 0;
  isDrag = false;

  data = skillEntries;
  formGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.font = '24px 맑은 고딕';
    this.draw();

    for (const skill of skillData) {
      this.formGroup.addControl(skill.name, new FormControl(false));
    }

    this.formGroup.valueChanges.subscribe(form => {
      this.draw();
    });

    this.ctx.translate(640, 640);
    this.translateX = 640;
    this.translateY = 640;

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
  }

  draw() {
    const skills = skillData.filter(s => this.formGroup.value[s.name]);
    this.ctx.clearRect(
      -this.translateX,
      -this.translateY,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    );
    for (const skill of skills) {
      this.drawSkill(skill);
    }
    for (const skill of skills) {
      this.drawSkillRect(skill);
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
    const draw = () => {
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
    };
    if (this.images[location] && this.images[location].complete) {
      draw();
    } else {
      this.images[location] = new Image();
      this.images[location].src = location;
      this.images[location].onload = draw;
    }
  }

  drawSkill(skill: SkillData) {
    this.drawImage(
      skill.location,
      skill.origin.x,
      skill.origin.y,
      0.5,
      skill.scale,
    );
  }

  drawSkillRect(skill: SkillData) {
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
    this.ctx.fillText(skill.name, skill.lt.x, skill.lt.y - 5);
  }

  drawChtr() {
    this.drawImage('assets/chtr.png', 42, 60);
  }
}
