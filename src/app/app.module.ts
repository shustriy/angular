import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';

import {Router, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { ComponentTwoModule } from './component-two/component-two.module'
import { ComponentOneModule } from './component-one/component-one.module'
import ComponentAux from './component-aux';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ComponentOneModule,
    ComponentTwoModule,
    routing
  ],
  declarations: [
    AppComponent,
    ComponentAux
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}