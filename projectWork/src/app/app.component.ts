import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgSwitch,NgSwitchCase } from '@angular/common';
import { TextEditorComponent } from './text-editor/textEditor.component';
import {HomeComponent} from './home/home.component'
import {CalculatorComponent} from './calculator/calculator.component'
import { EsportsresultsComponent } from './esportsresults/esportsresults.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EsportsresultsComponent,RouterModule,NgSwitch,NgSwitchCase,TextEditorComponent,HomeComponent,CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  state:String = "Me"
   title = 'routingAssignment';
   switchToMe() {
    this.state = 'Me';
  }
  switchToCalculator() {
    this.state = 'Calculator';
  }
  switchToExperience() {
    this.state = 'TextEditor';
  }
}
