import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private dragulaService: DragulaService) {
  }

  public ngOnInit() {
    // const bag: any = this.dragulaService.find('dragula-option1');
    // console.log('initBagByName bag', bag);
    // if (bag === undefined) {
    //   this.dragulaService.setOptions('dragula-option1', {
    //     removeOnSpill: false,
    //     revertOnSpill: true,
    //     accepts: (el) => {
    //       return true;
    //     },
    //     invalid: (el, handle) => {
    //       return false;
    //     },
    //     moves: (el, source, handle, sibling) => {
    //       return true;
    //     }
    //   });
    // }
    this.dragulaService.drag.subscribe((attributes) => {
      console.log('drag', attributes);
    });
  }

  public onMouseMove(event: MouseEvent) {
    console.log('onMouseMove', event);
  }


}
