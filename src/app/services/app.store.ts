import { Injectable } from '@angular/core';
import { createStore } from 'redux';

import * as TodoActions from './services/todo.actions';

const initialState = {
  todos: [],
  currentFilter: 'SHOW_ALL'
}

@Injectable()
export class AppStore {

  private appStore: any;

  constructor() {
    let rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return state.concat([action.text])
        default:
          return state
      }
    };
    this.appStore = createStore(rootReducer, ['Use Redux2'])
  }

  get store() {
    return this.appStore;
  }

}