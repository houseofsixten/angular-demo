import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

const parentClassBase = "fa-solid fa-arrow-right fa-rotate-by";
const parentClassCollapsed = "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow";
const parentClassExpanded = "fa-solid fa-arrow-right fa-rotate-by expanded-arrow";
const childClassBase = "leftnav-sub-item";
const childClassCollapsed = "leftnav-sub-item collapsed-sub";
const childClassExpanded = "leftnav-sub-item expanded-sub";

var navItems = [
  {
    id: 0,
    label: "Touhou",
    expanded: false,
    parentClass: parentClassBase,    
    children : [
      { id: 1.1, label: "Fairy Ring", linkTo: "/touhou/fairy" },
      { id: 1.2, label: "Autumn Children", linkTo: "/touhou/autumn" },
      { id: 1.3, label: "Use Your Illusion", linkTo: "/touhou/illusion" }
    ],
    childClass: childClassBase
  },
  {
    id: 1,
    label: "Item 02",
    expanded: false,
    parentClass: parentClassBase,
    children : [
      { id: 2.1, label: "Sub Item 2.1", linkTo: "/item02/subItem2_1" },
      { id: 2.2, label: "Sub Item 2.2", linkTo: "/item02/subItem2_2" }
    ],
    childClass: childClassBase
  },
  {
    id: 2,
    label: "Item 03",
    expanded: false,
    parentClass: parentClassBase,
    children : [
      { id: 3.1, label: "Sub Item 3.1", linkTo: "/item03/subItem3_1" },
      { id: 3.2, label: "Sub Item 3.2", linkTo: "/item03/subItem3_2" },
      { id: 3.3, label: "Sub Item 3.3", linkTo: "/item03/subItem3_3" },
      { id: 3.4, label: "Sub Item 3.4", linkTo: "/item03/subItem3_4" }
    ],
    childClass: childClassBase
  }
];


@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './nav.component.html',    
    styleUrl: './nav.component.css'
  })
  
  export class NavComponent {
    navItems = navItems;    
    onClick (index: number) {
      if (this.navItems[index].expanded == true)
      {
        this.navItems[index].expanded = false;
        this.navItems[index].parentClass = parentClassCollapsed;
        this.navItems[index].childClass = childClassCollapsed;
      }
      else
      {
        this.navItems[index].expanded = true;
        this.navItems[index].parentClass = parentClassExpanded;
        this.navItems[index].childClass = childClassExpanded;
      }
    };
  }

  
 
