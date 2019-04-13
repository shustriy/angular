import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppStore } from './services/app.store';
import { AppComponent } from './app.component';;
import { CounterComponent } from './components/counter.component';
import { SchulzComponent } from './schulz/schulz.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SchulzComponent
],
  imports: [
    BrowserModule
  ],
  providers: [
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
