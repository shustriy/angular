import { Map, List } from 'immutable';

export interface Todo extends Map<string, any> {
  get(key: 'id'): number;
  get(key: 'text'): string;
  get(key: 'completed'): string;
}