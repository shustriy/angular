import {  } from '@angular/core';
import {  } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: '[ad-host]'
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
