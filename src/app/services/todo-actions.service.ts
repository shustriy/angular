import * as Immutable from 'immutable';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export class TodoActionsService {
  private nextTodoId: number = 0;

  public addTodo(text) {
    this.nextTodoId++;
    let id = this.nextTodoId;
    return Immutable.Map({
      id: id,
      text: text,
      completed: false
    });

  }

}
