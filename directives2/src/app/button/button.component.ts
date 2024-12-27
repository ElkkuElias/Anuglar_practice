import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-button',
  imports: [NgIf],
  standalone:true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  isActive:boolean = false;
  
  onClick(){
    this.isActive = !this.isActive
  }
  

}
