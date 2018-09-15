import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcaneForceComponent } from './containers/arcane-force.component';

const routes: Routes = [
  {
    path: 'arcane-force',
    component: ArcaneForceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcaneForceRoutingModule {}
