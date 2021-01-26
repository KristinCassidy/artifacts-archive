import { Component, OnInit } from '@angular/core';
import { Collection } from './collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  collections: Collection[] =[
    new Collection('Keys', 'Collection Test-Description','../..src/assets/keys/key-2.jpg'),
    new Collection('Keys', 'Collection Test-Description','../..src/assets/keys/key-2.jpg'),
    new Collection('Keys', 'Collection Test-Description','../..src/assets/keys/key-2.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
