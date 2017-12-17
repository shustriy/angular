import { Injectable } from '@angular/core';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

@Injectable()
export class TodoActions {

  private nextToDoId: number;

  constructor() {
    this.nextToDoId = 0;
  }

  addTodo(text){
    return {
      type: ADD_TODO,
      id: this.nextToDoId++,
      text: text,
      completed: true
    };
  };

  toggleTodo(id) {
    return {
      type: TOGGLE_TODO,
      id: id
    };
  }
}
