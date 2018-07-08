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
  }

  public identity<T>(arg: T): T {
    return arg;
  }
}
