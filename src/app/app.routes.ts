import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchDetailComponent } from './components/matchdetails/matchdetails.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'match/:id', component: MatchDetailComponent },
];
