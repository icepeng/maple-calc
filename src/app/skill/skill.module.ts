import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './containers/skill/skill.component';
import { MaterialModule } from '../material/material.module';
import { SkillRoutingModule } from './skill-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SkillComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SkillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SkillModule { }
