import { Component } from '@angular/core';
import { AppStoreService } from './services/app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
      private appStore: AppStoreService
  ) {

  }
}
