import { Todo } from './todo.interface';

export interface TodoState {
  todos: Array<Todo>,
  currentFilter: string
}