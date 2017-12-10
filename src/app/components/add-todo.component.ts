import { Component } from '@angular/core';
import { AppStore } from '../services/app.store';
import { TodoActions } from '../services/todo.actions';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  providers: [TodoActions],
})
export class AddTodoComponent {

  constructor(
    protected appStore: AppStore,
    protected todoActions: TodoActions
  ) {
      console.log(this.appStore.store.getState());
  }

  private addTodo(input) {
    this.appStore.store.dispatch(this.todoActions.addTodo(input.value));
    input.value = '';
  }
}
