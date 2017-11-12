import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}