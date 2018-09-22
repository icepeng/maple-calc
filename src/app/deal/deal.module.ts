import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './containers/deal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DealRoutingModule } from './deal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DealRoutingModule,
  ],
  declarations: [DealComponent],
})
export class DealModule {}
