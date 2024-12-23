import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [NgFor],
  standalone:true,
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
items: string[] = ['Finland','Sweden','Estonia','Morocco','Spain']
}
