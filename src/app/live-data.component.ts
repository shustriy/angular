import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataProvider } from './data.provider';

@Component({
  selector: 'live-data',
  template: 'Data: {{dataProvider.data}}'
})
export class LiveDataComponent {
  constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {}

  @Input()
  set live(value) {
    console.log('live:', value);
    if (value) {
      //this.ref.detectChanges();
      //console.log('detectChanges');

      this.ref.reattach();
      console.log('reattach');

    } else {
      this.ref.detach();
      console.log('detach');
    }
  }
}