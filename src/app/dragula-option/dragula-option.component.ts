import { Component, Input, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'dragula-option',
  templateUrl: './dragula-option.component.html',
  styleUrls: ['./dragula-option.component.css']
})
export class DragulaOptionComponent implements OnInit {

  @Input() public bagName: string;
  constructor(private dragulaService: DragulaService) {
  }

  ngOnInit() {
    let me = this;
    const bag: any = this.dragulaService.find(this.bagName);
    if (bag === undefined) {
      this.dragulaService.setOptions(this.bagName, {

        revertOnSpill: true,
        // accepts: (el) => {
        //   return true;
        // },
        // invalid: (el, handle) => {
        //   return true;
        // },
        // moves: (el, source, handle, sibling) => {
        //   return true;
        // }
        moves: function (el, source, handle, sibling) {
          console.log('moves', el, source, handle, sibling);
          return true; // elements are always draggable by default
        },
        accepts: function (el, target, source, sibling) {
          // me.clearBackground();
          // console.log('accepts', el, target, source, sibling, sibling.styles);
          // el.styles.background = 'blue';
          // sibling.styles.background = '#757575';
          return true; // elements can be dropped in any of the `containers` by default
        },
        invalid: function (el, handle) {
          console.log('invalid', el, handle);
          return false; // don't prevent any drags from initiating by default
        },
      });
    }
  }

  clearBackground() {
    const els = document.getElementsByClassName('dragula-stuff');
    for (let i in els) {
      console.log(els[i].attributes);
        // .style.background = '#FFF';
    }
  }
}
