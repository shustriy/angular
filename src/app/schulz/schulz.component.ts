import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStore } from '../services/app.store';
import * as SchulzActions from '../services/schulz.actions';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { schulz } from '../services/reducers/schulz.reducer';
import { schulzConfig } from './schulz.config';

@Component({
  selector: 'schulz',
  templateUrl: './schulz.component.html',
  styleUrls: ['./schulz.component.css']
})
export class SchulzComponent implements OnDestroy {
  public schulz: number[][];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    protected appStore: AppStore
  ) {
    this.appStore.getSchulzStream().pipe(
      filter((schulz: number[][]) => +schulz.length === schulzConfig.size),
      takeUntil(this.destroy$)
    ).subscribe((schulz: number[][]) => this.schulz = schulz);
    this.appStore.store.dispatch({ type: SchulzActions.GENERATE });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
