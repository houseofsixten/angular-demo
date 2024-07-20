import { Component } from '@angular/core';

var navItems = [
  {
    id: 0,
    label: "Item 1",
    expanded: false,
    expandedClass: "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow",    
    children : [
      { id: 1.1, label: "Sub Item 1.1" },
      { id: 1.2, label: "Sub Item 1.2" },
      { id: 1.3, label: "Sub Item 1.3" }
    ],
    childClass: "leftnav-sub-item"
  },
  {
    id: 1,
    label: "Item 2",
    expanded: false,
    expandedClass: "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow",
    children : [
      { id: 2.1, label: "Sub Item 2.1" },
      { id: 2.2, label: "Sub Item 2.2" }
    ],
    childClass: "leftnav-sub-item"
  },
  {
    id: 2,
    label: "Item 3",
    expanded: false,
    expandedClass: "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow",
    children : [
      { id: 3.1, label: "Sub Item 3.1" },
      { id: 3.2, label: "Sub Item 3.2" },
      { id: 3.3, label: "Sub Item 3.3" },
      { id: 3.4, label: "Sub Item 3.4" }
    ],
    childClass: "leftnav-sub-item"
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
        this.navItems[index].expandedClass = "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow";
        this.navItems[index].childClass = "leftnav-sub-item collapsed-sub"
      }
      else
      {
        this.navItems[index].expanded = true;
        this.navItems[index].expandedClass = "fa-solid fa-arrow-right fa-rotate-by expanded-arrow";
        this.navItems[index].childClass = "leftnav-sub-item expanded-sub"
      }
    };
  }

  
 
