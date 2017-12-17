import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AppStore } from '../services/app.store';
import { TodoActions } from '../services/todo.actions';
import { Todo } from '../services/todo.interface';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [TodoActions],
})
export class FilterComponent {

  private unsubscribe: Observable<any>;
  @Input() public id: number;
  @Input() public completed: boolean;

  constructor(
    protected appStore: AppStore,
    protected todoActions: TodoActions
  ) {

  }

  public onToggleTodo() {
    console.log('onToggleTodo');
    let id = this.id;
    this.appStore.store.dispatch(this.todoActions.toggleTodo(id));
  }
}
