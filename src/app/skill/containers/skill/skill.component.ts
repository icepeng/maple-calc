import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SkillData, skillData, skillEntries } from '../../skill-data';

const originX = 1020;
const originY = 640;

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

  data = skillEntries;
  formGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.font = '24px 맑은 고딕';
    this.drawChtr();

    for (const skill of skillData) {
      this.formGroup.addControl(skill.name, new FormControl(false));
    }

    this.formGroup.valueChanges.subscribe(form => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      const skills = skillData.filter(s => form[s.name]);
      for (const skill of skills) {
        this.drawSkill(skill);
      }
      for (const skill of skills) {
        this.drawSkillRect(skill);
      }
      this.drawChtr();
    });
  }

  drawImage(location: string, x: number, y: number, alpha: number = 1) {
    const draw = () => {
      this.ctx.globalAlpha = alpha;
      this.ctx.drawImage(this.images[location], x, y);
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
      originX - skill.origin.x,
      originY - skill.origin.y,
      0.5,
    );
  }

  drawSkillRect(skill: SkillData) {
    this.ctx.strokeRect(
      originX + skill.lt.x,
      originY + skill.lt.y,
      skill.rb.x - skill.lt.x,
      skill.rb.y - skill.lt.y,
    );
    if (skill.lt2) {
      this.ctx.strokeRect(
        originX + skill.lt2.x,
        originY + skill.lt2.y,
        skill.rb2.x - skill.lt2.x,
        skill.rb2.y - skill.lt2.y,
      );
    }
    this.ctx.fillText(
      skill.name,
      originX + skill.lt.x,
      originY + skill.lt.y - 5,
    );
  }

  drawChtr() {
    this.drawImage('assets/chtr.png', originX - 42, originY - 60);
  }
}
