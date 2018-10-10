import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ComponentTwo from './component-two';
import ChildTwo from './child-two';
import ChildOne from './child-one';
import ComponentOne from '../component-one/component-one';
import ComponentAux from '../component-aux';

const componentTwoRoutes: Routes = [
  { path: 'component-two', component: ComponentTwo,
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildOne },
      { path: 'child-two', component: ChildTwo, outlet: 'sidebar' },
      // { path: 'component-one', component: ComponentOne },
      // { path: 'component-aux', component: ComponentAux }
    ]
  }
];

// const componentTwoRoutes: Routes = [
//   { path: 'component-two', component: ComponentTwo }
// ];

@NgModule({
  imports: [
    RouterModule.forChild(componentTwoRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ComponentTwoRoutingModule { }