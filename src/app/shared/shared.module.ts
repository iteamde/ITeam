import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material.module';
import {
  CarouselModule,
  WavesModule,
  NavbarModule,
  ButtonsModule,
  IconsModule
} from 'angular-bootstrap-md';

import {
  ExaSharedLibModule
} from './components/shared-lib.module';
import { ToastrModule } from 'ngx-toastr';


const angularBootstrap = [
  CarouselModule,
  WavesModule,
  NavbarModule,
  ButtonsModule,
  IconsModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ExaSharedLibModule,
    ...angularBootstrap
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule,
    ExaSharedLibModule,
    ...angularBootstrap
    ]
})
export  class SharedModule {}
