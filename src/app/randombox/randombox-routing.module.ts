import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomboxComponent } from './containers/randombox.component';

const routes: Routes = [
  {
    path: 'randombox',
    component: RandomboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomboxRoutingModule {}
