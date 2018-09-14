import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RandomboxComponent } from './containers/randombox.component';
import { RandomboxRoutingModule } from './randombox-routing.module';
import { RandomboxService } from './services/randombox.service';

@NgModule({
  imports: [
    CommonModule,
    RandomboxRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [RandomboxComponent],
  providers: [RandomboxService],
})
export class RandomboxModule {}
