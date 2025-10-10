import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html', // <-- \template: `<app-dashboard></app-dashboard>`,
  styleUrls: ['./app.component.css'] // Empty CSS file for potential future styles
})
export class AppComponent {}
