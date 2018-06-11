import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { AdvancedTypesComponent } from './advanced-types/advanced-types.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    AdvancedTypesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
