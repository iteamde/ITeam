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

import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';

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
    ContactComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    ...angularBootstrap
  ],
  exports: [
    ContactComponent,
    FormsModule,
    ...materialModules,
    ...angularBootstrap
  ],
})
export class ContactModule { }
