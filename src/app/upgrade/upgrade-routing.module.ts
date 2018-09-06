import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpgradeComponent } from './containers/upgrade.component';

const routes: Routes = [
  {
    path: 'upgrade',
    component: UpgradeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpgradeRoutingModule {}
