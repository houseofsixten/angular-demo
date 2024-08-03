import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

const parentClassBase = "fa-solid fa-arrow-right fa-rotate-by";
const parentClassCollapsed = "fa-solid fa-arrow-right fa-rotate-by collapsed-arrow";
const parentClassExpanded = "fa-solid fa-arrow-right fa-rotate-by expanded-arrow";
const parentClassParentOfActive = "fa-solid fa-arrow-right fa-rotate-by parent-of-active-arrow";
const childClassBase = "leftnav-sub-item";
const childClassCollapsed = "leftnav-sub-item collapsed-sub";
const childClassExpanded = "leftnav-sub-item expanded-sub";
const childClassActive = "leftnav-sub-item active-sub";
const childClassSiblingOfActive = "leftnav-sub-item sibling-of-active-sub";

var navItems = [
  {
    id: 0,
    label: "Touhou Project",
    expanded: false,
    parentClass: parentClassBase,    
    children : [
      { id: 1.1, label: "Fairy Ring", linkTo: "/touhou/fairy/0", isActive: false, childClass: childClassBase },
      { id: 1.2, label: "Autumn Children", linkTo: "/touhou/autumn/0", isActive: false, childClass: childClassBase },
      { id: 1.3, label: "Use Your Illusion", linkTo: "/touhou/illusion/0", isActive: false, childClass: childClassBase }
    ]
  },
  {
    id: 1,
    label: "Magic the Gathering",
    expanded: false,
    parentClass: parentClassBase,
    children : [
      { id: 2.1, label: "Lotus Cobra is Evil", linkTo: "/magic/cobra/0", isActive: false, childClass: childClassBase }
    ]
  },
  {
    id: 2,
    label: "Item 03",
    expanded: false,
    parentClass: parentClassBase,
    children : [
      { id: 3.1, label: "Sub Item 3.1", linkTo: "/item03/subItem3_1", isActive: false, childClass: childClassBase },
      { id: 3.2, label: "Sub Item 3.2", linkTo: "/item03/subItem3_2", isActive: false, childClass: childClassBase },
      { id: 3.3, label: "Sub Item 3.3", linkTo: "/item03/subItem3_3", isActive: false, childClass: childClassBase },
      { id: 3.4, label: "Sub Item 3.4", linkTo: "/item03/subItem3_4", isActive: false, childClass: childClassBase }
    ]
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
    constructor (private activatedRoute: ActivatedRoute, private router: Router) {};
    ngOnInit() {      
      this.router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
           route = route.firstChild;
          }          
          if (route.snapshot.url.length >= 2)
          {
            var compareLinkTo = "/" + route.snapshot.url[0].path + "/" + route.snapshot.url[1].path;
            // console.log(compareLinkTo);

            for (var i = 0; i < navItems.length; i++)
            {
              var isParentNavItemActive = false;

              for (var j = 0; j < navItems[i].children.length; j++)
              {
                var linkTo = navItems[i].children[j].linkTo.substring(0, navItems[i].children[j].linkTo.lastIndexOf('/'));
                // console.log(linkTo);

                if (linkTo == compareLinkTo)
                {
                  isParentNavItemActive = true;
                  navItems[i].children[j].isActive = true;
                  navItems[i].children[j].childClass = childClassActive;
                }
                else
                {
                  navItems[i].children[j].isActive = false;
                }
              }

              if (isParentNavItemActive == true)
              {
                this.navItems[i].expanded = true;
                this.navItems[i].parentClass = parentClassParentOfActive;
                
                for (var j = 0; j < navItems[i].children.length; j++)
                {
                  if (navItems[i].children[j].isActive == false)
                  {
                    navItems[i].children[j].childClass = childClassSiblingOfActive;
                  }
                }
              }
              else
              {
                this.navItems[i].expanded = false;
                this.navItems[i].parentClass = parentClassBase;

                for (var j = 0; j < navItems[i].children.length; j++)
                  {
                    this.navItems[i].children[j].isActive = false;
                    this.navItems[i].children[j].childClass = childClassBase;
                  }
              }              
            }
          }
          else
          {
            for (var i = 0; i < navItems.length; i++)
            {
              this.navItems[i].expanded = false;
              this.navItems[i].parentClass = parentClassBase;

              for (var j = 0; j < navItems[i].children.length; j++)
              {
                this.navItems[i].children[j].isActive = false;
                this.navItems[i].children[j].childClass = childClassBase;
              }
            }
          }
          return route;
         }),
         map(route => route.url)
        )
       .subscribe();
    };    
    navItems = navItems;    
    onClick (index: number) {
      if (this.navItems[index].expanded == true)
      {
        this.navItems[index].expanded = false;
        this.navItems[index].parentClass = parentClassCollapsed;

        for (var i = 0; i < navItems[index].children.length; i++)
        {
          this.navItems[index].children[i].childClass = childClassCollapsed;
        }
        
      }
      else
      {
        this.navItems[index].expanded = true;
        this.navItems[index].parentClass = parentClassExpanded;

        for (var i = 0; i < navItems[index].children.length; i++)
        {
          if (this.navItems[index].children[i].isActive == true)
          {
            this.navItems[index].children[i].childClass = childClassActive;
          }
          else
          {
            this.navItems[index].children[i].childClass = childClassExpanded;
          }
        }
      }
    };
  }

  
 
