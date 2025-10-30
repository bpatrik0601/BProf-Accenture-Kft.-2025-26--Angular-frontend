import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballService } from '../../services/football.service';
import { RouterModule } from '@angular/router';

interface Match {
  id: number;
  startTime: string;
  league?: { name: string };
  homeTeam?: { name: string };
  awayTeam?: { name: string };
  homeScore?: { current: number };
  awayScore?: { current: number };
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  groupedMatches: { league: string; matches: Match[] }[] = [];
  statusMessage = 'Loading live matches...';

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService.getLiveMatches().subscribe({
      next: (data) => {
        const events: Match[] = data.events || [];

        // Grouping by league
        const groupedByLeague = events.reduce((acc: { [key: string]: Match[] }, match: Match) => {
          const leagueName = match.league?.name || 'Unknown League';
          if (!acc[leagueName]) {
            acc[leagueName] = [];
          }
          acc[leagueName].push(match);
          return acc;
        }, {});

        // Sorting matches within each league by kickoff time
        for (const league in groupedByLeague) {
          groupedByLeague[league].sort((a: Match, b: Match) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
        }

        // Alphabetical sorting of leagues
        const sortedLeagues = Object.keys(groupedByLeague).sort();

        // Setting the final grouped and sorted structure
        this.groupedMatches = sortedLeagues.map(league => ({
          league,
          matches: groupedByLeague[league]
        }));

        this.statusMessage = this.groupedMatches.length
          ? 'Live matches loaded'
          : 'No live matches found.';
      },
      error: () => {
        this.statusMessage = 'Error fetching live data.';
      }
    });
  }
}
