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
  }

  public identity<T>(arg: T): T {
    return arg;
  }
}
