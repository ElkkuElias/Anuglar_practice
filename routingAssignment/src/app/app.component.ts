import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgSwitch,NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,NgSwitch,NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  state:String = "Me"
   title = 'routingAssignment';
   switchToMe() {
    this.state = 'Me';
  }
  switchToSkills() {
    this.state = 'Skills';
  }
  switchToExperience() {
    this.state = 'Experience';
  }
}
