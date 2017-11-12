import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CmpComponent } from './cmp.component';
import { GiantListComponent } from './giant-list.component';
import { LiveDataComponent } from './live-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
