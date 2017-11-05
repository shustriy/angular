import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { DragulaOptionComponent } from './dragula-option/dragula-option.component';

@NgModule({
  declarations: [
    AppComponent,
    DragulaOptionComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
