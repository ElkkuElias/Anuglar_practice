import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-json-pipe-component',
  imports: [JsonPipe],
  templateUrl: './json-pipe-component.component.html',
  styleUrl: './json-pipe-component.component.css'
})
export class JsonPipeComponentComponent {
  testObject = { name: 'Elias', age: 22, job: 'Unemployed student' };
  testArray = [5, 15, 53, 1, 2];

}
