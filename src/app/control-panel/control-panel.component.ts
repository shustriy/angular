import { Component } from '@angular/core';

import { AppStore } from '../services/app.store';
import * as TimerActions from '../services/timer.actions';
import * as SchulzActions from '../services/schulz.actions';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  constructor(
    protected appStore: AppStore
  ) { }

  public onStart() {
    this.appStore.store.dispatch({ type: TimerActions.START });
  }

  public onStop() {
    this.appStore.store.dispatch({ type: TimerActions.STOP });
  }

  public onRestart() {
    this.appStore.store.dispatch({ type: TimerActions.RESTART });
  }

  public onGenerateSchulz() {
    this.appStore.store.dispatch({ type: SchulzActions.REFRESH });
  }
}
