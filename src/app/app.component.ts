import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'app';
  public cnt: number = 0;

  public ngOnInit() {
    console.log('ngOnInit');
    //Rx.Observable
    //    .of(1,2,3)
    //    .map(x => x + '&')
    //    .subscibe((x) => console.log('x:', x));

    Rx.Observable.of(1,3,4,5,6,7,8)
        .switchMap((x) => Rx.Observable
            .of(4,2,3,8)
            .map(val => x + ',' + val)
        )
        .subscribe((x) => console.log(x));

    //Rx.Observable
    //    .interval(200)
    //    .take(9)
    //    .map(x => x + "!!!")
    //    .bufferCount(2)
    //    .subscribe((x) => console.log('x', x));

  }
  public onClick() {

  }
}
