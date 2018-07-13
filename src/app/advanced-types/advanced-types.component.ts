import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-types',
  templateUrl: './advanced-types.component.html'
})
export class AdvancedTypesComponent implements OnInit {

  ngOnInit() {

    interface Bird {
      fly();
      layEggs();
    }

    interface Fish {
      swim();
      layEggs();
    }

    function isFish(pet: Bird | Fish): pet is Fish {
      return  (<Fish>pet).swim !== undefined;
    }

    let objBird: Bird = {
      fly: () => {},
      layEggs: () => {}
    };

    let objFish: Fish = {
      swim: () => {},
      layEggs: () => {}
    };

    console.log('Must be Fish', isFish(objFish));
    console.log('Must be Bird', isFish(objBird));

    function padLeft(value: string, padding: string | number) {
      if (typeof padding === "number") {
        console.log('Array(padding)', Array(padding));
        return Array(padding).join("$") + value;
      }

      if (typeof padding === "string") {
        return padding + value;
      }

      throw new Error(`Expected string or number, got '${padding}'.`);
    }

    console.log('typeof type guards => padLeft has value as a number', padLeft('px:', 3));
    console.log('typeof type guards => padLeft has value as a string', padLeft('px:', 's'));

    let strNull: string = "str";
    console.log('Nullable types => string', strNull);
    strNull = null;
    console.log('Nullable types => string & null', strNull);

    let arrNull: Array<number> = [1,2,3,4,5];
    console.log('Nullable types => array', arrNull);
    arrNull = null;
    console.log('Nullable types => array & null', arrNull);

    // name!.charAt(0)

    function broken(name: string | null): string {
      function postfix(epithet: string) {
        return name.charAt(0) + '. the ' + epithet;
      }

      //name = name || 'Bob';
      return postfix("great");
    }

    function fixed(name: string | null): string {
      function postfix(epithet: string) {
        return name!.charAt(0) + '. the ' + epithet;
      }

      //name = name || 'Bob';
      return postfix("great");
    }

    //console.log("fixed()", fixed(null));
    //console.log("broken()", broken(null));

    // Type Aliases

    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;

    function getName(n: NameOrResolver): Name {
      if (typeof n === "string") {
        return n;
      } else {
        return n();
      }
    }

    console.log("NameOrResolver getName string", getName("It's string"));
    console.log("NameOrResolver getName () => string", getName(() => "It's string"));

    // Together with intersection types, we can make some pretty mind-bending types

    type LinkedList<T> = T & { next: LinkedList<T>}

    interface Person {
      name: string;
    }

    const people: LinkedList<Person> = {
      name: 'Jeff',
      next: {
        name: 'John',
        next: {
          name: 'Jim',
          next: null
        }
      }
    };

    console.log('people', people);

    //Numeric Literal Types

    function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
      return 2;
    }

    type NumericType = 1 | 2 | 3 | 4 | 5 | 6;

    function rollDieWithNumericType(): NumericType {
      return 2;
    }

    console.log('rollDie', rollDie());
    console.log('rollDieWithNumericType', rollDieWithNumericType());

    // Discriminated Unions (Размеченное объединение)

    interface Square {
      kind: "square",
      size: number
    }

    interface Rectangle {
      kind: "rectangle",
      width: number,
      height: number
    }

    interface Circle {
      kind: "circle",
      radius: number;
    }

    type Shape = Square | Rectangle | Circle;

    function area(s: Shape) {
      switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius;
      }
    }

    const squareShape: Shape = {
      kind: "square",
      size: 20
    };

    console.log('Discriminated Unions => area', area(squareShape));

    // Index types

    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
      console.log('pluck names', names);
      return names.map(n => o[n]);
    }

    interface Person1 {
      name: string,
      age: number
    }

    const person: Person1 = {
      name: 'Jarid',
      age: 35
    }

    const strings: string[] = pluck(person, ['name']);
    console.log('strings', strings);

  }

  public identity<T>(arg: T): T {
    return arg;
  }
}
