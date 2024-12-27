import { Component } from '@angular/core';
import {NgSwitch} from '@angular/common';
import { NgSwitchCase } from '@angular/common';
@Component({
  selector: 'app-switching',
  imports: [NgSwitch,NgSwitchCase],
  templateUrl: './switching.component.html',
  styleUrl: './switching.component.css'
})
export class SwitchingComponent {
  state:String = "Name";
   switchToName() {
    this.state = "Name"  
  }
  switchToAge() {
    this.state = "Age"  
  }
  switchToJob() {
    this.state = "Job"  
  }

}
