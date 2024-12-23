import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
@Component({
  selector: 'app-number-button',
  imports: [InputFieldComponent],
  templateUrl: './number-button.component.html',
  styleUrl: './number-button.component.css'
}) 


export class NumberButtonComponent {

randomNumber:string = "";
onButtonClick(){
  this.randomNumber = String(Math.floor(Math.random() * 999))
  
};
}

