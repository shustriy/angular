import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {
  public counter = 0;
  public firstCounter = 0;

  public increaseCounter() {
    this.counter++;
  }

  public increaseFirstCounter() {
    this.firstCounter++;
  }

  public getSeconds() {
    return (new Date).getSeconds();
  }
}
