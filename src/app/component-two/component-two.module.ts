import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import ComponentTwo from './component-two';
import ChildTwo from './child-two';
import ChildOne from './child-one';
import { ComponentTwoRoutingModule } from './component-two-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentTwoRoutingModule
  ],
  declarations: [
    ComponentTwo,
    ChildOne,
    ChildTwo
  ]
})
export class ComponentTwoModule {}