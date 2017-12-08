import { Component } from '@angular/core';
import { AppStore } from './services/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./app.componentadd-todo.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public appStore: AppStore
  ) {

    this.appStore.store.dispatch({
      type: 'ADD_TODO',
      text: 'Read the docs'
    })

    console.log(this.appStore.store.getState());
  }
}
