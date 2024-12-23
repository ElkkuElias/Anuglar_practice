import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstPipesComponentComponent} from './first-pipes-component/first-pipes-component.component'
import {JsonPipeComponentComponent} from './json-pipe-component/json-pipe-component.component'
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,CustomPipePipe,FirstPipesComponentComponent,JsonPipeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event_handling_4-7';
}
