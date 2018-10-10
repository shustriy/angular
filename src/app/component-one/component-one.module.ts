import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import ComponentOne from './component-one';
import { ComponentOneRoutingModule } from './component-one-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentOneRoutingModule
  ],
  declarations: [
    ComponentOne
  ]
})
export class ComponentOneModule {}