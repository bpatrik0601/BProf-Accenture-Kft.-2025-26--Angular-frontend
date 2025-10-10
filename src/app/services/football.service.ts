import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'https://api.sofascore.com/api/v1/sport/football/events/live';

  constructor(private http: HttpClient) {}

  getLiveMatches(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
