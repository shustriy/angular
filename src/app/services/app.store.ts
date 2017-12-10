import { Injectable } from '@angular/core';
import { createStore } from 'redux';

import * as TodoActions from './todo.actions';
import { TodoState } from './todo-state.interface';

const initialState: TodoState = {
  todos: [],
  currentFilter: 'SHOW_ALL'
}

@Injectable()
export class AppStore {

  private appStore: any;

  constructor() {
    let rootReducer = (state: TodoState = initialState, action) => {
      switch (action.type) {
        case TodoActions.ADD_TODO:
          return {
            todos: state.todos.concat({
              id: action.id,
              text: action.text,
              completed: action.completed
            }),
            currentFilter: state.currentFilter
          };
        default:
          return state
      }
    };
    this.appStore = createStore(rootReducer);
  }

  get store() {
    return this.appStore;
  }

}