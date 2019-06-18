import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageRoutingModule } from './services-page.routing';

import { ServicesPageComponent } from './services-page.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  declarations: [
    ServicesPageComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ServicesPageRoutingModule
  ]
})
export class ServicesPageModule { }
