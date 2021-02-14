import { Component, OnInit } from '@angular/core';
import { Collection } from './collection/collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  host: {'class': 'container-fluid'}
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
