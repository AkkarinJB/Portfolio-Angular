import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path:'' ,component:HomeComponent },
  { path:'**' ,redirectTo:'' , pathMatch:'full' },
];

