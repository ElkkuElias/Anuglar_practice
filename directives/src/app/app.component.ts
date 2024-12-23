import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorDirective } from './color.directive';
import { BackgroundColorDirective } from './background-color.directive';
import { ButtonComponent } from './button/button.component';
import { CountriesComponent } from './countries/countries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountriesComponent,ButtonComponent,ColorDirective,BackgroundColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
}