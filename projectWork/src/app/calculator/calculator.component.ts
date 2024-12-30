import { Component } from '@angular/core';
import { NgSwitch,NgSwitchCase } from '@angular/common';
@Component({
  selector: 'app-calculator',
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  state:string = "+"
  num1:number = 0;
  num2:number = 0;
  result:number = 0;
public onInputChange(event:any,inputFieldNumber:number){
  const input = event.target as HTMLInputElement;
  if(inputFieldNumber == 1){
  this.num1 = Number(input.value)}
  else if(inputFieldNumber == 2){
    this.num2 = Number(input.value)}
  else {
    // When i press the button i wont be targeting any inputfield 
    //I could leave this else clause out but it helps read the code
  }
    if (this.state == "+"){
      this.result = this.num1+this.num2;
    }
    else if (this.state == "-"){
      this.result = this.num1-this.num2;
    }
    else if (this.state == "*"){
      this.result = this.num1*this.num2;
    }
    else if (this.state == "/"){
      if (this.num2==0){
        this.result = NaN
      }
      this.result = this.num1/this.num2;
    }
}
stateToPlus(){
  this.state="+"
}
stateToMinus(){
  this.state="-"
}
stateToStar(){
  this.state="*"
}
stateToSlash(){
  this.state="/"
}





}
