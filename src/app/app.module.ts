import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppStoreService } from './services/app-store.service';
import { TodoActionsService } from './services/todo-actions.service';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule
  ],
  providers: [
    AppStoreService,
    TodoActionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
