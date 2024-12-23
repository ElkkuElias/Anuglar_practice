import { Component, Input, Output } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
@Component({
  selector: 'app-input-field',
  imports: [DropdownComponent],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
 value:number = 0;
 @Input() buttonNumber: string = "";
  sum:number=0;
public onInputChange(event:any){
  const input = event.target as HTMLInputElement;
  this.value = Number(input.value);
  const buttonValue: number = Number(this.buttonNumber);
  this.sum = buttonValue + this.value;
}
}
