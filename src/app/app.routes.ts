import { Routes } from '@angular/router';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { TestComponent } from './components/test/test.component';
import { TitleComponent } from './components/title/title.component';

export const routes: Routes = [
  { path: 'title', component: TitleComponent },
  { path: '', redirectTo: 'title', pathMatch: 'full' },
  { path: 'notes/:id', component: NoteDetailsComponent },
  { path: 'test', component: TestComponent },
];
