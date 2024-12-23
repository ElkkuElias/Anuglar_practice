import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { WeatherComponent } from './weather/weather.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WeatherComponent,NewComponentComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundamentals of Angular.js';
  name = 'Elias Vuorinen';
  yesterdayweather = '-9'
}
