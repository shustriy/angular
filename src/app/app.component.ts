import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public getDate() {
    const date = new Date();
    return date.getTime();
  }
}

@Component({
  selector: 'child-app',
  template: `Number of ticks: {{numberOfTicks}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChildAppComponent {
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      // require view to be updated
      this.ref.markForCheck();
    }, 1000);
  }
}
