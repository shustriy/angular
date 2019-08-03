import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppStore } from '../services/app.store';
import * as TimerActions from '../services/timer.actions';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit, OnDestroy {
  public timer: number = 0;
  private uniqueId: number;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  private runTimer: () => void = () => {
    const uniqueId = this.uniqueId = this.createTimerId();

    const timerFn = () => {
      setTimeout(() => {
        if (+uniqueId === +this.uniqueId) {
          this.timer += 100;
          this.transformToTime(this.timer);
          timerFn();
        }
      }, 100);
    };

    timerFn();
  };

  constructor(
    protected appStore: AppStore
  ) { }

  ngOnInit() {
    this.initSubscription();
  }

  private initSubscription() {
    this.appStore.getTimerStream()
      .pipe(
          takeUntil(this.destroy$)
      ).subscribe((state: number) => this.doActionByState(state));
  }

  private doActionByState(state: number) {
    if (state == TimerActions.STATE_START) {
      this.uniqueId = 0;
      this.runTimer();
    }

    if (state == TimerActions.STATE_STOP) {
      this.uniqueId = 0;
    }

    if (state == TimerActions.STATE_RESET) {
      this.timer = 0;
    }
  }

  private createTimerId() {
    const current = new Date()
    return current.getMilliseconds();
  }

  public transformToTime(milliseconds) {
    milliseconds = milliseconds/100;
    const timeInSeconds = Math.floor(milliseconds/10);

    let minutes = Math.floor(timeInSeconds/60);
    let seconds = (minutes>0) ? (timeInSeconds - minutes*60) : timeInSeconds;

    const toStr = (value: number) => {
      return ((value<10) ? ('0' + value) : value)
    };
    return toStr(minutes) + ':' + toStr(seconds) + '.' + (milliseconds - timeInSeconds*10);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
