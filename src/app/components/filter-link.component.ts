import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AppStore } from '../services/app.store';
import { TodoActions } from '../services/todo.actions';
import { Todo } from '../services/todo.interface';

@Component({
  selector: 'filter-link',
  templateUrl: './filter-link.component.html',
  styleUrls: ['./filter-link.component.css'],
  providers: [TodoActions],
})
export class FilterLinkComponent {

  private unsubscribe: Observable<any>;
  @Input() public filter: string;
  public active: boolean;

  constructor(
    protected appStore: AppStore,
    protected todoActions: TodoActions
  ) {
    this.unsubscribe = this.appStore.store
      .subscribe(() => this.updateActive());
  }

  public applyFilter(filter) {
    console.log('applyFilter', filter);
    this.appStore.store.dispatch(this.todoActions.setCurrentFilter(filter));
  }

  public updateActive() {
    this.active = (this.filter == this.appStore.store.getState().currentFilter);
  }
}
