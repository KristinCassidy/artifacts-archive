import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }
    quote1 = ["Cataloguing ensures information about objects, where they were found, and their relationship to other objects is recorded. Throughout every step of the archaeological process, archaeologists make sure detailed information from the excavation stay with the artifacts.", 'https://archaeologymuseum.ca/cataloguing-artifacts/#:~:text=Cataloguing%20ensures%20information%20about%20objects,excavation%20stay%20with%20the%20artifacts.']

  ngOnInit(): void {
  }

}
