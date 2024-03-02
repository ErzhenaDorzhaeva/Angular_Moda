import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../service/note.service';
import { INote } from '../../types';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss',
})
export class NoteDetailsComponent implements OnInit {
  constructor(public noteServer: NoteService, private route: ActivatedRoute) {}

  public note: INote;

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let idX = data['id'] - 1;
      this.note = this.noteServer.notes[idX];
    });
  }
}
