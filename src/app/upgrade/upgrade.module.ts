import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from '../material/material.module';
import { UpgradeComponent } from './containers/upgrade.component';
import { UpgradeRoutingModule } from './upgrade-routing.module';
import { UpgradeMatrixComponent } from './containers/upgrade-matrix.component';

@NgModule({
  imports: [
    CommonModule,
    UpgradeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
  ],
  declarations: [UpgradeComponent, UpgradeMatrixComponent],
})
export class UpgradeModule {}
