import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppStore } from './services/app.store';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo.component';
import { TodoComponent } from './components/todo.component';
import { TodoListComponent } from './components/todo-list.component';
import { FiltersComponent } from './components/filters.component';
import { FilterLinkComponent } from './components/filter-link.component';
import { VisibleTodosPipe } from './services/visible-todos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    TodoListComponent,
    FiltersComponent,
    FilterLinkComponent,
    VisibleTodosPipe
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
