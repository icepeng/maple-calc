import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from '../material/material.module';
import { ArcaneForceRoutingModule } from './arcane-force-routing.module';
import { ArcaneForceComponent } from './containers/arcane-force.component';

@NgModule({
  imports: [
    CommonModule,
    ArcaneForceRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
  ],
  declarations: [ArcaneForceComponent],
})
export class ArcaneForceModule {}
