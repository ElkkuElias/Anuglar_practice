import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
@Input() dividable = 10;
divider = 1; //by default one or atleast above 0 XD
result = 0;
onChooseDivider(event:any){
  this.divider = Number((event.target as HTMLInputElement).value) // cast the dropdown option as the divider
}
onClickDivide(){
this.result = Math.floor(this.dividable / this.divider);
}
}
