import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public showSubMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    let sidebar = document.getElementById("sidebar");
      if ( sidebar.className !== "active") {
        sidebar.className = "active";
      } else {
        sidebar.className = "";
      };
  } 
 
  
}
