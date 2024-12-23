import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import {InputFieldComponent} from './input-field/input-field.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonComponent,InputFieldComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'angular_basics_pt2';
}
