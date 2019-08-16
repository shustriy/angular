import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
