import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ComponentOne from './component-one';

const componentOneRoutes: Routes = [
  { path: 'component-one', component: ComponentOne}
];


@NgModule({
  imports: [
    RouterModule.forChild(componentOneRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ComponentOneRoutingModule { }