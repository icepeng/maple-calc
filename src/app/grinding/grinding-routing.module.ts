import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrindingComponent } from './containers/grinding.component';

const routes: Routes = [
  {
    path: 'grinding',
    component: GrindingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrindingRoutingModule {}
