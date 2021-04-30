import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './containers/skill.component';
import { MaterialModule } from '../material/material.module';
import { SkillRoutingModule } from './skill-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayerComponent } from './containers/layer.component';
import { CanvasComponent } from './containers/canvas.component';
import { SearchComponent } from './containers/search.component';
import { DraggableComponent } from './containers/draggable.component';
import { CanvasSettingComponent } from './containers/canvas-setting.component';

@NgModule({
  declarations: [SkillComponent, LayerComponent, CanvasComponent, SearchComponent, DraggableComponent, CanvasSettingComponent],
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
