import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataProvider } from './data.provider';

@Component({
  selector: 'giant-list',
  template: `
    <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
  `,
})
export class GiantListComponent {
  constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }
}