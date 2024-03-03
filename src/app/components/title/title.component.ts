import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { NotesComponent } from '../notes/notes.component';
import { PromotionComponent } from '../promotion/promotion.component';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    PromotionComponent,
    NotesComponent,
    HeaderComponent,
    MenuComponent,
    TestComponent,
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  constructor(private route: Router) {}
  goToTest() {
    this.route.navigate(['test']);
  }
}
