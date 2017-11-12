import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataProvider } from './data.provider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  providers: [DataProvider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public live: boolean = true;
}