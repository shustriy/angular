import { Component } from '@angular/core';
import { AppStore } from './services/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public appStore: AppStore
  ) {

    // this.appStore.store.dispatch({
    //   type: 'ADD_TODO',
    //   text: 'Read the docs'
    // })

    console.log(this.appStore.store.getState());
  }
}
