import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourthComponent {
  @Input() parentCounter;
  last;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngDoCheck() {
    console.log('doCheck');
    if (this.parentCounter.value > 5) {
      this.last = this.parentCounter.value;
      this.cd.markForCheck();
    }
  }

  public getSeconds() {
    return (new Date).getTime();
  }
}
