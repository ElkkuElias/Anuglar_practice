import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
title='Todays weather';
desc='Today is probably -10 degrees outside and it is dark as hell'
}