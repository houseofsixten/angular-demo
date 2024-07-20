import { Component } from '@angular/core';

const parentClassBase = "fa-solid fa-arrow-right fa-rotate-by";
const parentClassCollapsed = "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow";
const parentClassExpanded = "fa-solid fa-arrow-right fa-rotate-by expanded-arrow";
const childClassBase = "leftnav-sub-item";
const childClassCollapsed = "leftnav-sub-item collapsed-sub";
const childClassExpanded = "leftnav-sub-item expanded-sub";

var navItems = [
  {
    id: 0,
    label: "Item 1",
    expanded: false,
    parentClass: parentClassBase,    
    children : [
      { id: 1.1, label: "Sub Item 1.1" },
      { id: 1.2, label: "Sub Item 1.2" },
      { id: 1.3, label: "Sub Item 1.3" }
    ],
    childClass: childClassBase
  },
  {
    id: 1,
    label: "Item 2",
    expanded: false,
    parentClass: parentClassBase,
    children : [
      { id: 2.1, label: "Sub Item 2.1" },
      { id: 2.2, label: "Sub Item 2.2" }
    ],
    childClass: childClassBase
  },
  {
    id: 2,
    label: "Item 3",
    expanded: false,
    parentClass: parentClassBase,
    children : [
      { id: 3.1, label: "Sub Item 3.1" },
      { id: 3.2, label: "Sub Item 3.2" },
      { id: 3.3, label: "Sub Item 3.3" },
      { id: 3.4, label: "Sub Item 3.4" }
    ],
    childClass: childClassBase
  }
];

@Component({
    selector: 'app-nav',
    standalone: true,
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

  
 
