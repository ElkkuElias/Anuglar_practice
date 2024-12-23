import { Component } from '@angular/core';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
message = "";
onInputChange(event:any){
this.message = event.target.value;
}
}
