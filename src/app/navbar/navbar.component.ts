import { Component, Input, OnInit } from '@angular/core';
import { SubheaderComponent } from '../header/subheader/subheader.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() showCollectionsSubMenu = false;
  @Input() showResearchSubMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: any) {
    let sidebar = document.getElementById("sidebar");
      if ( sidebar.className !== "active") {
        sidebar.className = "active";
      } else {
        sidebar.className = "";
      };
  } 

  
 
  
}
