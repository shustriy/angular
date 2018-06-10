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

    class BeeKeeper {
      public hasMask: boolean;
    }

    class ZooKeeper {
      public nametag: string;
    }

    class Animal {
      public numLegs: number;
    }

    class Bee extends Animal {
      keeper: BeeKeeper = new BeeKeeper();
    }

    class Lion extends Animal {
      keeper: ZooKeeper = new ZooKeeper();
    }

    function createInstance<A extends Animal>(c: new () => A): A {
      console.log('createInstance', c);
      return new c();
    }

    function createInstance2<A extends Animal>(c: {new (): A;}): A {
      console.log('createInstance2', c);
      return new c();
    }

    console.log('createInstance(Lion).keeper', createInstance(Lion));
    console.log('createInstance(Bee).keeper', createInstance(Bee));
    console.log('createInstance2(Lion).keeper', createInstance2(Lion));
    console.log('createInstance2(Bee).keeper', createInstance2(Bee));


  }

  public identity<T>(arg: T): T {
    return arg;
  }
}
