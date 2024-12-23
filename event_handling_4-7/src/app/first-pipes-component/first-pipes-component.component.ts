import { Component } from '@angular/core';
import { DatePipe,CurrencyPipe,PercentPipe } from '@angular/common';

@Component({
  selector: 'app-first-pipes-component',
  imports: [DatePipe,CurrencyPipe,PercentPipe],
  templateUrl: './first-pipes-component.component.html',
  styleUrl: './first-pipes-component.component.css'
})
export class FirstPipesComponentComponent {
today:Date = new Date();
amount:number = 5432.21;
percent:number = 0.11
}
