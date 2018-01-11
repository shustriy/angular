import { Component, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { List } from 'immutable';

import { AppStore } from '../services/app.store';
import { TodoActions } from '../services/todo.actions';
import { Todo } from '../services/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoActions],
})
export class TodoListComponent implements OnDestroy {

  private unsubscribe: Observable<any>;
  public todos: List<Todo>;
  public currentFilter: string;

  constructor(
    protected appStore: AppStore
  ) {
      console.log(this.appStore.store.getState());
      this.unsubscribe = this.appStore.store.subscribe(() => {
        console.log('TodoListComponent subscription');
        let state = this.appStore.store.getState();
        this.currentFilter = state.currentFilter;
        this.todos = state.todos;
        console.log('State todos2', state.todos.toArray());
      });
  }

  ngOnDestroy() { }
}
