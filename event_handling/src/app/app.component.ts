import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberButtonComponent } from '../number-button/number-button.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NumberButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event_handling';
}
