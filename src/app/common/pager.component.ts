import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pager',
    standalone: true,
    templateUrl: './pager.component.html',
    styleUrl: './pager.component.css'
  })

  export class PagerComponent  {   
    
    @Input() pages: any = [];
    @Input() pagenumber!: string;
    @Input() imagefolder!: string;

    currentPage = 0;
    nextPage = 1;
    prevPage = this.pages.length - 1;
  
    ngOnInit() {    
  
      this.currentPage = Number(this.pagenumber);
  
      if (this.currentPage == 0) { this.prevPage = this.pages.length - 1; }
      else { this.prevPage = this.currentPage - 1; }
      
      if (this.currentPage == this.pages.length - 1) { this.nextPage = 0; }
      else { this.nextPage = this.currentPage + 1; }
    };
  }