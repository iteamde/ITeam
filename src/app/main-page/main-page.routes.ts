import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';

import { RoutesConstants } from '../shared/constants';


const mainPageRoutes: Routes = [
  {
    path: '',
    redirectTo: RoutesConstants.mainPage.path,
    pathMatch: 'full'
  },
  {
    path: RoutesConstants.mainPage.path,
    component: MainPageComponent,
    children: [
      { path: RoutesConstants.mainPage.home.path, loadChildren: './home/home.module#HomeModule', data: {animation: 'Home'} },
      { path: RoutesConstants.mainPage.services.path, loadChildren: './services-page/services-page.module#ServicesPageModule',
      data: {animation: 'ServicesPage'} },
      { path: RoutesConstants.mainPage.customers.path, loadChildren: './customers/customers.module#CustomersModule',
      data: {animation: 'CustomersModule'}  },
      { path: RoutesConstants.mainPage.ourTeam.path, loadChildren: './our-team/our-team.module#OurTeamModule',
      data: {animation: 'OurTeam'}  },
      { path: RoutesConstants.mainPage.contact.path, loadChildren: './contact/contact.module#ContactModule',
      data: {animation: 'Contact'}  },
      { path: RoutesConstants.mainPage.calculator.path, loadChildren: './calculator/calculator.module#CalculatorModule',
      data: {animation: 'Calculator'}  }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(mainPageRoutes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
