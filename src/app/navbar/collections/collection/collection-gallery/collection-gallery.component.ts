import { Component, OnInit } from '@angular/core';

import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-gallery',
  templateUrl: './collection-gallery.component.html',
  styleUrls: ['./collection-gallery.component.css'],
  // host: {'class': 'collection-gallery'}
})
export class CollectionGalleryComponent implements OnInit {
  collections: Collection[];

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
  }

}
