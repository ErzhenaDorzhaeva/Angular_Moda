import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { NotesComponent } from '../notes/notes.component';
import { PromotionComponent } from '../promotion/promotion.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [PromotionComponent, NotesComponent, HeaderComponent, MenuComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {}
