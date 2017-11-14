import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent {
  public counter = { value: 0 };
  @Input() firstCounter;
  @Input() secondCounter;

  constructor(private cd: ChangeDetectorRef) {
    setTimeout(() => {
      //this.cd.detectChanges();
      console.log('detect');
    }, 3000);
  }

  public increaseCounter() {
    this.counter.value++;
  }

  public getSeconds() {
    return (new Date).getTime();
  }
}
