import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPageComponent } from './services-page.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const ServicesPageRoutes: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
    data: {animation: 'Services'}
  },
  {
    path: ':service',
    component: ServiceDetailsComponent,
    data: {animation: 'ServiceDetails'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(ServicesPageRoutes)],
  exports: [RouterModule]
})
export class ServicesPageRoutingModule { }