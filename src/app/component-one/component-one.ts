import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import ChildTwo from "../component-two/child-two";
import ChildOne from "../component-two/child-one";
import ComponentTwo from "../component-two/component-two";

@Component({
  selector: 'component-one',
  template: 'Component One'
})
export default class ComponentOne implements OnInit {

  constructor(router: Router) {
    console.log('ComponentOne. Routes: ', JSON.stringify(router.config, undefined, 2));
    // const routesPath: Routes = [
    //   { path: 'component-two', component: ComponentTwo,
    //     children: [
    //       { path: 'component-one', component: ComponentOne }
    //     ]
    //   }
    // ];
    router.config[1]['children'].push({ path: 'component-one', component: ComponentOne })
    router.resetConfig(router.config);


  }

  ngOnInit() {
    console.log('Component One')
  }
}