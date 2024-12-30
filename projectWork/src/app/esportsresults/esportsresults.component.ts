import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';

interface Match {
  begin_at: string;
  name: string;
  league: {
    name: string;
  };
  opponents: Array<{
    opponent: {
      name: string;
      slug: string;
    }
  }>;
  status: string;
  serie: {
    name: string;
    year: number;
  };
  tournament: {
    name: string;
  };
  number_of_games: number;
  results: Array<{
    score: number;
    team_id: number;
  }>;
}

@Component({
  selector: 'app-esportsresults',
  standalone:true,
  imports: [ CommonModule,JsonPipe ],
  templateUrl: './esportsresults.component.html',
  styleUrl: './esportsresults.component.css'
})

export class EsportsresultsComponent implements OnInit {
  matches: Match[] = []; 
  
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'authorization': 'Bearer L5gQiDDxkOrSOi-mUDQ9Xsp2wvp8eLjqdYlwAEWMDQvvkSEQG7w'
    });

    this.http.get<Match[]>('https://api.pandascore.co/teams/g2-esports/matches?per_page=5&sort=-begin_at', 
      { headers: headers }
    ).subscribe({
      next: (response: any) => {
        this.matches = response;
        this.isLoading = false;
        console.log('Matches loaded:', this.matches);
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
        console.error('Error:', err);
      }
    });
}
}
