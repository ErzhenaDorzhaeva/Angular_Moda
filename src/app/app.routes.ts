import { Routes } from '@angular/router';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { TitleComponent } from './components/title/title.component';

export const routes: Routes = [
  { path: 'title', component: TitleComponent },
  { path: '', redirectTo: 'title', pathMatch: 'full' },
  { path: 'notes/:id', component: NoteDetailsComponent },
];
