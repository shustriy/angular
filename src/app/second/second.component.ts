import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {
  public counter = 0;
  public secondCounter = 0;
  @Input() firstCounter;

  constructor(private cd: ChangeDetectorRef) {
    //this.cd.detach();
  }

  public increaseCounter() {
    this.counter++;
  }

  public increaseSecondCounter() {
    this.secondCounter++;
  }

  public getSeconds() {
    return (new Date).getTime();
  }
}
