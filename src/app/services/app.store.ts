import { Injectable } from '@angular/core';
import { createStore } from 'redux';
import * as Immutable from 'immutable';

import * as TodoActions from './todo.actions';
import { TodoState } from './todo-state.interface';
import { Todo } from './todo.model';

const initialState: TodoState = {
  todos: Immutable.List([]),
  currentFilter: 'SHOW_ALL'
}

@Injectable()
export class AppStore {

  private appStore: any;

  constructor() {

    let toggleTodo = (todos, action) => {
      return todos.map((todo) => {
        if (todo.get('id') != action.id) {
          return todo;
        }

        return Immutable.Map({
          id: action.id,
          text: todo.get('text'),
          completed: !todo.get('completed')
        });
      });
    };

    let rootReducer = (state: TodoState = initialState, action) => {
      console.log('rootReducer', action);
      switch (action.type) {
        case TodoActions.ADD_TODO:
          let todo: Todo = Immutable.Map({
              id: action.id,
              text: action.text,
              completed: action.completed
          });
          state.todos = state.todos.push(todo);
          return {
            todos: state.todos,
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