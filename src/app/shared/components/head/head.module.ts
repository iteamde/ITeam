import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
 } from '@angular/material';
import { IconsModule } from 'angular-bootstrap-md';

import { HeadComponent } from './head.component';

const angularBootstrap = [
  IconsModule
];

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
];

@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    ...angularBootstrap
  ],
  exports: [
    HeadComponent,
    FormsModule,
    ...materialModules,
    ...angularBootstrap
  ],
})
export class HeadModule { }
