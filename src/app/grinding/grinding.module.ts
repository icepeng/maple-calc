import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { GrindingComponent } from './containers/grinding.component';
import { GrindingRoutingModule } from './grinding-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GrindingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GrindingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GrindingModule {}
