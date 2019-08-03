import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppStore } from './services/app.store';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { SchulzComponent } from './schulz/schulz.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    SchulzComponent,
    TimerComponent
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
