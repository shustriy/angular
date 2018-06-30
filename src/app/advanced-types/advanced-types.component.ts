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
  }

  public identity<T>(arg: T): T {
    return arg;
  }
}
