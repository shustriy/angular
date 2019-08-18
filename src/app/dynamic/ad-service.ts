import { Injectable } from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';

import { AdItem } from './ad-item';

@Injectable
export class AdService {
  public getAds() {
    return [
      new AdItem(HeroJobAdComponent, {name: 'Test1', bio: 'Bio1'}),
      new AdItem(HeroProfileComponent, {name: 'Test2', bio: 'Bio2'})
    ];
  }
}
