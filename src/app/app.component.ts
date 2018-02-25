import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title: string = 'app';
  public cnt: number = 0;
  @ViewChild('btn') button: ElementRef;

  public ngOnInit() {
    console.log('ngOnInit');

    //this.runObservableMap();
    //this.runObservabeMapWithTake();
    //this.runObservableSwitchMap();
    //this.runSubjectFromGuide();
    this.runSubjectObservable();
  }

  public ngAfterViewInit() {
    console.log('ngAfterViewInit');
    //this.runObservableFromEvent();
  }

  public runObservableMap() {
    Rx.Observable
        .of(1,2,3)
        .map(x => x + '&')
        .subscribe((x) => console.log('x:', x));
  }

  public runObservabeMapWithTake()
  {
    Rx.Observable
        .interval(200)
        .take(9)
        .map(x => x + "!!!")
        .bufferCount(2)
        .subscribe((x) => console.log('x', x));
  }

  public runObservableSwitchMap() {
    Rx.Observable.of(1,3,4,5,6,7,8)
        .switchMap((x) => Rx.Observable
            .of(4,2,3,8)
            .map(val => x + ',' + val)
        )
        .subscribe((x) => console.log(x));
  }

  public runObservableFromEvent() {
    const btnObservable = Rx.Observable
        .fromEvent(this.button.nativeElement, 'click')
        .switchMap(() => Rx.Observable
            .of(4,2,3,8)
            .map(val => ',' + val)
        );
    const btnSubscriber = btnObservable.subscribe((x) => console.log('x', x));
    console.log('btnObservable', btnObservable);
    console.log('btnSubscriber', btnSubscriber);
  }


  public runSubjectFromGuide() {
    var source = Rx.Observable.interval(1000);

    var subject = new Rx.Subject();

    var subSource = source.subscribe(subject);

    var subSubject1 = subject.subscribe(
        function (x) { console.log('Value published to observer #1: ' + x); },
        function (e) { console.log('onError: ' + e.message); },
        function () { console.log('onCompleted'); });

    var subSubject2 = subject.subscribe(
        function (x) { console.log('Value published to observer #2: ' + x); },
        function (e) { console.log('onError: ' + e.message); },
        function () { console.log('onCompleted'); });

    setTimeout(function () {
      // Clean up
      subject.complete();
    }, 5000);
  }

  public runSubjectObservable() {
    var source = Rx.Observable.from([0,1,2,3,4,5,6,7,8,9]).delay(1000).map((x) => x*10);

    var subject = new Rx.Subject();

    var subSource = source.subscribe(subject);

    var subSubject1 = subject.subscribe(
        function (x) { console.log('Value published to observer #1: ' + x); },
        function (e) { console.log('onError: ' + e.message); },
        function () { console.log('onCompleted'); });

    var subSubject2 = subject.subscribe(
        function (x) { console.log('Value published to observer #2: ' + x); },
        function (e) { console.log('onError: ' + e.message); },
        function () { console.log('onCompleted'); });
    console.log('source', source, 'subSubject1', subSubject1, 'subSource', subSource);

    setTimeout(function () {
      // Clean up
      subject.complete();
    }, 5000);
  }
}
