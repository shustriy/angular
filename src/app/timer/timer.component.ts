import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStore } from '../services/app.store';
import * as SchulzActions from '../services/schulz.actions';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {
  public schulz: number[][];

  constructor(
    protected appStore: AppStore
  ) {
    this.appStore.store.subscribe(() => {
      console.log('SUBSCRIBE getSchulz');
      this.schulz = this.appStore.getSchulz();
    });
    this.appStore.store.dispatch({ type: SchulzActions.GENERATE });
  }
}
