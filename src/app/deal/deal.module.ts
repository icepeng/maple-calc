import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './containers/deal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DealRoutingModule } from './deal-routing.module';
import { HyperStatComponent } from './components/hyper-stat.component';
import { LevelStatComponent } from './components/level-stat.component';
import { ArcaneSymbolStatComponent } from './components/arcane-symbol-stat.component';
import { AbilityStatComponent } from './components/ability-stat.component';
import { UnionStatComponent } from './components/union-stat.component';
import { SkillStatComponent } from './components/skill-stat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DealRoutingModule,
  ],
  declarations: [
    DealComponent,
    HyperStatComponent,
    LevelStatComponent,
    ArcaneSymbolStatComponent,
    AbilityStatComponent,
    UnionStatComponent,
    SkillStatComponent,
  ],
})
export class DealModule {}
