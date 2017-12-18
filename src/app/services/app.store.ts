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

    let toggleTodo = (todos, action) => {
      return todos.map((todo) => {
        if (todo.id != action.id) {
          return todo;
        }

        return {
          id: action.id,
          text: todo.text,
          completed: !todo.completed
        };
      });
    };

    let rootReducer = (state: TodoState = initialState, action) => {
      console.log('rootReducer', action);
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
        case TodoActions.TOGGLE_TODO:
          return {
            todos: toggleTodo(state.todos, action),
            currentFilter: state.currentFilter
          }
        case TodoActions.SET_CURRENT_FILTER:
          return {
            todos: state.todos,
            currentFilter: action.filter
          }
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