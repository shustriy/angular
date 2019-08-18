import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/control-panel.component';
import { AdBannerComponent } from './dynamic/ad-banner.component';
import { AdDirective } from './dynamic/ad.directive';


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    AdBannerComponent,
    AdDirective
],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
