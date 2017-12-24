import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'visibleTodos'
})
export class VisibleTodosPipe implements PipeTransform {
  transform(todos, filter){
    if (!todos) return;
    if (filter.length == 0) {
      console.log('VisibleTodos pipe requires one argument');
    }
    if (!Array.isArray(todos)){
      console.log('VisibleTodos pipe requires an Array as input');
    }
    return this.getVisibleTodos(todos, filter);
  }

  private getVisibleTodos(todos, filter){
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  };
}