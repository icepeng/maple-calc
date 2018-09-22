import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealComponent } from './containers/deal.component';

const routes: Routes = [
  {
    path: 'deal',
    component: DealComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealRoutingModule {}
