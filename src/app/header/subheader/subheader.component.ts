import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  host: {'class': 'container-fluid'}
})
export class SubheaderComponent implements OnInit {
pageTitle: string;

  constructor() { 
    // this.pageTitle = 
  }

  ngOnInit(): void {
  }

}
