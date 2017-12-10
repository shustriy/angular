import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppStore } from './services/app.store';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo.component';
import { TodoComponent } from './components/todo.component';
import { TodoListComponent } from './components/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    TodoListComponent
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
