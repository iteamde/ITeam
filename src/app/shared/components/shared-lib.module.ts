import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactModule } from './contact/contact.module';
import { HeadModule } from './head/head.module';

const sharedLibModules = [
  ContactModule,
  HeadModule
];

@NgModule({
  imports: [
      CommonModule,
      ...sharedLibModules
    ],
  exports: [ sharedLibModules ],
  declarations: []
})
export class ExaSharedLibModule { }
