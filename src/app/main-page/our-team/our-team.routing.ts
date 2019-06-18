import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurTeamComponent } from './our-team.component';

const outTeamPageRoutes: Routes = [
  {
    path: '',
    component: OurTeamComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(outTeamPageRoutes)],
  exports: [RouterModule]
})
export class OurTeamRoutingModule { }
