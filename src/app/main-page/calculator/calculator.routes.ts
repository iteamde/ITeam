import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './calculator.component';

const calculatorRoutes: Routes = [
  {
    path: '',
    component: CalculatorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(calculatorRoutes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
