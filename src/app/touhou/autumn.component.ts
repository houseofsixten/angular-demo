import { Component, Input } from '@angular/core';
import { PagerComponent } from '../common/pager.component';

const autumnPages = [
  "page000.jpg",  "page001.jpg", "page002.jpg", "page003.jpg" , "page004.jpg", "page005.jpg", "page006.jpg", "page007.jpg", "page008.jpg", "page009.jpg",
  "page010.jpg",  "page011.jpg", "page012.jpg", "page013.jpg" , "page014.jpg", "page015.jpg", "page016.jpg", "page017.jpg", "page018.jpg", "page019.jpg",
  "page020.jpg",  "page021.jpg", "page022.jpg", "page023.jpg" , "page024.jpg", "page025.jpg", "page026.jpg", "page027.jpg", "page028.jpg", "page029.jpg",
  "page030.jpg",  "page031.jpg", "page032.jpg", "page033.jpg" , "page034.jpg", "page035.jpg", "page036.jpg", "page037.jpg", "page038.jpg", "page039.jpg",
  "page040.jpg",  "page041.jpg", "page042.jpg", "page043.jpg" , "page044.jpg", "page045.jpg", "page046.jpg", "page047.jpg", "page048.jpg", "page049.jpg",
  "page050.jpg"
];

@Component({
  selector: 'app-autumn',
  standalone: true,
  imports: [ PagerComponent ],
  templateUrl: './autumn.component.html',
  styleUrl: './touhou.component.css'
})

export class AutumnComponent {
  @Input() pagenumber!: string;
  pages = autumnPages;
  imagefolder = "touhou/autumn/";
}
