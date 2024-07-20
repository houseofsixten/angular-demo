import { Component, Input } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Sixten';
  hasDatabase = false;
  frogWords = [{id: 0, text: 'Water'}, {id: 1, text: 'Holding'}, {id: 2, text: 'Frog'}];
  isEditable = true;
  message = '';
  onMouseOver() {
    this.message = 'This is the secret message';
  };
  onMouseOut() {
    this.message = '';
  };
}
