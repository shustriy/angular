import { List } from 'immutable';
import { Todo } from './todo.model';

export interface TodoState {
  todos: List<Todo>,
  currentFilter: string
}