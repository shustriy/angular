import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {
  title = 'app';

  constructor(private dragulaService: DragulaService) {
    // dragulaService.drag.subscribe((value) => {
    //   this.onDrag(value.slice(1));
    // });
    // dragulaService.drop.subscribe((value) => {
    //   this.onDrop(value.slice(1));
    // });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }
  //
  // private onDrag(args) {
  //   let [e, el] = args;
  //   console.log('onDrag', e, el);
  // }
  //
  // private onDrop(args) {
  //   let [e, el] = args;
  //   console.log('onDrop', e, el);
  // }

  private onOver(args) {
    let [e, el, container] = args;
    console.log('onOver', e, el, container);
  }

  private onOut(args) {
    let [e, el, container] = args;
    console.log('onOut', e, el, container);
  }

}
