import { Routes } from '@angular/router';
import { TitleComponent } from './components/title/title.component';

export const routes: Routes = [
  { path: 'title', component: TitleComponent },
  { path: '', redirectTo: 'title', pathMatch: 'full' },
];
