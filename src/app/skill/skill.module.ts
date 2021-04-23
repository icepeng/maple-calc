import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './containers/skill/skill.component';
import { MaterialModule } from '../material/material.module';
import { SkillRoutingModule } from './skill-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [SkillComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SkillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
})
export class SkillModule {}
