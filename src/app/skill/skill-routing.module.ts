import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './containers/skill/skill.component';

const routes: Routes = [
  {
    path: 'skill',
    component: SkillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillRoutingModule {}
