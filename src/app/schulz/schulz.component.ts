import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStore } from '../services/app.store';
import * as SchulzActions from '../services/schulz.actions';

@Component({
  selector: 'schulz',
  templateUrl: './schulz.component.html',
  styleUrls: ['./schulz.component.css']
})
export class SchulzComponent {
  public schulz: number[][];

  constructor(
    protected appStore: AppStore
  ) {
    this.appStore.store.subscribe(() => {
      console.log('SUBSCRIBE getSchulz');
      this.schulz = [];
    });
    this.appStore.store.dispatch({ type: SchulzActions.GENERATE });
  }
}
