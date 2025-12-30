import { Component, Input } from '@angular/core';
import { PagerComponent } from '../common/pager.component';

const cobraPages = [
    "lcie10.jpg", "page_000.jpg", "page_001a.jpg", "page_001b.jpg", "page_002a.jpg", "page_002b.jpg",
    "cobra6.jpg", "cobra7.jpg", "cobra8.jpg", "cobra9.jpg", "cobra10.jpg",
    "cobra11.jpg", "cobra12.jpg", "cobra13.jpg", "cobra14.jpg", "cobra15.jpg",
    "cobra16.jpg", "cobra17.jpg", "cobra18.jpg", "cobra19.jpg", "serra_01.jpg", "serra_02.jpg", "serra_03.jpg",
    "cobra20.jpg", "cobra21.jpg", "cobra22.jpg", "cobra23.jpg", "cobra24.jpg", "cobra25.jpg",
    "cobra27.jpg", "cobra28.jpg", "cobra29.jpg", "cobra30.jpg", "cobra31.jpg", "cobra34.jpg", "cobra35.jpg",
    "chandra001.jpg", "chandra002.jpg", "chandra003.jpg", "chandra004.jpg",
    "cobra37.jpg", "cobra38.jpg", "cobra39.jpg", "cobra40.jpg",
    "cobra41.jpg", "cobra42.jpg", "cobra43.jpg", "cobra44.jpg", "cobra45.jpg",
    "cobra46.jpg", "cobra47.jpg", "cobra48.jpg", "cobra49.jpg", "cobra50.jpg",
    "cobra51.jpg", "cobra54.jpg", "cobra55.jpg", "cobra56.jpg", "cobra57.jpg", "cobra58.jpg", "cobra59.jpg", "cobra60.jpg",
    "page_050a.jpg", "page_050b.jpg", "page_051a.jpg", "page_051b.jpg", "page_052a.jpg", "page_052b.jpg",
    "page_053a.jpg", "page_054a.jpg", "page_054b.jpg",
    "cobra61.jpg", "cobra63.jpg", "cobra66.jpg", "cobra67.jpg", "cobra68.jpg", "cobra69.jpg", "cobra71.jpg", "cobra72.jpg"
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
