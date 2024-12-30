import { Component } from '@angular/core';
import { NgSwitch,NgSwitchCase } from '@angular/common';
@Component({
  selector: 'app-textEditor',
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './textEditor.component.html',
  styleUrl: './textEditor.component.css'
})
export class TextEditorComponent {
bgColor:String = "#FFFFFF"
textColor:String = "#000000"

public onInputChangeBG(event:any):void{
  const input = event.target as HTMLInputElement;
  this.bgColor = input.value;
}
public onInputChangeColor(event:any):void{
  const input = event.target as HTMLInputElement;
  this.textColor = input.value;
}

}
