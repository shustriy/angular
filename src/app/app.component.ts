import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataProvider } from './data.provider';

@Component({
  selector: 'app',
  providers: [DataProvider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}