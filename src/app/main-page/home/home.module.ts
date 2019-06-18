import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { InUkraineComponent } from './in-ukr/in-ukr.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    HomeComponent,
    InUkraineComponent,
    PresentationComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
