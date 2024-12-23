import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styles: [
  `button {
  background-color : blue;
  color: red;}
  
  .on{
  background-color: white;
  color: black;}`
  ]
})
export class ButtonComponent {
  on = false;
  message = ""
onButtonClick(){
 this.on = !this.on;
 if(this.on == true){
  this.message = "Jesse Pinkman"
 }
 else{
  this.message="";
 }
 
}

}
