import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const customersPageRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(customersPageRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
