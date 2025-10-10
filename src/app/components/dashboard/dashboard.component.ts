import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  matches: any[] = [];
  statusMessage = 'Loading live matches...';

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService.getLiveMatches().subscribe({
      next: (data) => {
        this.matches = data.events || [];
        this.statusMessage = this.matches.length
          ? 'Live matches loaded'
          : 'No live matches found.';
      },
      error: () => {
        this.statusMessage = 'Error fetching live data.';
      }
    });
  }
}
