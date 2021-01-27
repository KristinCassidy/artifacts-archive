import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onSelected() {   }

  onToggle(event: Event) {
    let sidebar = document.getElementById("sidebar");
      if ( sidebar.className !== "active") {
        sidebar.className = "active";
      } else {
        sidebar.className = "";
      };
  } 

}
