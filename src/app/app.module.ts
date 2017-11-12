import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpComponent } from './cmp.component';
import { GiantListComponent } from './giant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    GiantListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
