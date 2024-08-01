import { Component, Input } from '@angular/core';
import { PagerComponent } from '../common/pager.component';

const fairyPages = [
  "fr3_page000c.jpg",  "fr3_page001.jpg", "fr3_page002.jpg", "fr3_page003.jpg" , "fr3_page004.jpg", "fr3_page005.jpg", "fr3_page006.jpg", "fr3_page007.jpg", "fr3_page008.jpg", "fr3_page009.jpg",
  "fr3_page010.jpg",  "fr3_page011.jpg", "fr3_page012.jpg", "fr3_page013.jpg" , "fr3_page014.jpg", "fr3_page015.jpg", "fr3_page016.jpg", "fr3_page017.jpg", "fr3_page018.jpg", "fr3_page019.jpg",
  "fr3_page020.jpg",  "fr3_page021.jpg", "fr3_page022.jpg", "fr3_page023.jpg" , "fr3_page024.jpg", "fr3_page025.jpg", "fr3_page026.jpg", "fr3_page027.jpg", "fr3_page028.jpg", "fr3_page029.jpg",
  "fr3_page030.jpg",  "fr3_page031.jpg", "fr3_page032.jpg", "fr3_page033.jpg" , "fr3_page034.jpg", "fr3_page035.jpg", "fr3_page036.jpg", "fr3_page037.jpg"
];


@Component({
  selector: 'app-fairy',
  standalone: true,
  imports: [ PagerComponent ],
  templateUrl: './fairy.component.html',
  styleUrl: './touhou.component.css'
})

export class FairyComponent {
  @Input() pagenumber!: string;
  pages = fairyPages;
  imagefolder = "touhou/fairy/";
}
