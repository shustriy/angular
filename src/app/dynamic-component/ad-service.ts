import { Injectable } from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';

import { Hero } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
        <h4>{{data.headline}}</h4>
        
        {{data.body}}
    </div>  
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
