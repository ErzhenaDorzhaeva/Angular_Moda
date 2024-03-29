import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from '../../pipes/filter.pipe';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgFor, FilterPipe, NgIf],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  constructor(public noteService: NoteService, private route: Router) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe();
  }

  goToDetails(id: number) {
    this.route.navigate(['notes/', id]);
  }
}
