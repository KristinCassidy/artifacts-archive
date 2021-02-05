import { Component, Input, OnInit } from '@angular/core';

import { Collection } from '../collection.model';

@Component({
  selector: 'app-collection-preview',
  templateUrl: './collection-preview.component.html',
  styleUrls: ['./collection-preview.component.css'],
  host: {'class': 'collection-gallery'}
})
export class CollectionPreviewComponent implements OnInit {
  @Input() collection: Collection;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  getImage() {
    return `url(${this.collection.imagePath})`;
  }

}
