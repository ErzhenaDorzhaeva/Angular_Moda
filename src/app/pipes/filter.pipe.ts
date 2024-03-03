import { Pipe, PipeTransform } from '@angular/core';
import { INote } from '../types';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(notes: INote[], search: string): INote[] {
    if (search.length === 0) return notes;
    return notes.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
