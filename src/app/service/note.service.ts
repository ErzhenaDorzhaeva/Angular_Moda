import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { INote } from '../types';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: INote[] = [];
  constructor(private http: HttpClient) {}

  getNotes(): Observable<INote[]> {
    return this.http
      .get<INote[]>('http://localhost:3000/notes', {
        params: new HttpParams(),
      })
      .pipe(tap((params) => (this.notes = params)));
  }
}
