import { Component, Input } from '@angular/core';
import { PagerComponent } from '../common/pager.component';

const cobraPages = [
    "lcie10.jpg", "page_000.jpg", "page_001a.jpg", "page_001b.jpg", "page_002a.jpg", "page_002b.jpg",
    "cobra6.jpg", "cobra7.jpg", "cobra8.jpg", "cobra9.jpg", "cobra10.jpg",
    "cobra11.jpg", "cobra12.jpg", "cobra13.jpg", "cobra14.jpg", "cobra15.jpg",
    "cobra16.jpg", "cobra17.jpg", "cobra18.jpg", "cobra19.jpg", "serra_01.jpg", "serra_02.jpg", "serra_03.jpg",
    "cobra20.jpg", "cobra21.jpg", "cobra22.jpg", "cobra23.jpg", "cobra24.jpg", "cobra25.jpg",
    "cobra27.jpg", "cobra28.jpg", "cobra29.jpg", "cobra30.jpg", "cobra31.jpg", "cobra34.jpg", "cobra35.jpg"
];

@Component({
  selector: 'app-cobra',
  standalone: true,
  imports: [ PagerComponent ],
  templateUrl: './cobra.component.html',
  styleUrl: './magic.component.css'
})

export class CobraComponent {
  @Input() pagenumber!: string;
  pages = cobraPages;
  imagefolder = "magic/cobra/";
}
