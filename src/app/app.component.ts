import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {

    function identity<T>(arg: T): T {
      console.log('identity', arg);
      return arg;
    }

    const myIdentity: {<T>(arg: T): T} = identity;

    const output1 = myIdentity<string>('Hello');
    const output2 = myIdentity(' World!');
    console.log('AppComponent', output1, output2);

    interface GenericIdentityFn<T> {
      (arg: T): T;
    }

    const myIdentity2: GenericIdentityFn<number> = identity;

    const output3 = myIdentity2(3);
    console.log('AppComponent', output3);

    // Generic Constraints

    interface Lengthwise {
      length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log('loggingIdentity', arg)
      return arg;
    }

    loggingIdentity({length: 3});

    // Using Type Parameters in Generic Constraints

    function getProperty<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
    }

    let x = {a: 1, b: 2, c:3, d: 4};
    console.log('getProperty', getProperty(x, "a"));
    console.log('getProperty', getProperty(x, "c"));
  }

  public identity<T>(arg: T): T {
    return arg;
  }
}
