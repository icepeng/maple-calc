import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeMatrixComponent } from './containers/upgrade-matrix.component';
import { UpgradeComponent } from './containers/upgrade.component';

const routes: Routes = [
  {
    path: 'upgrade',
    component: UpgradeComponent,
  },
  {
    path: 'upgrade-matrix',
    component: UpgradeMatrixComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpgradeRoutingModule {}
