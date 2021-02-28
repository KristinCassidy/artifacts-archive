import { Component, OnInit } from '@angular/core';
// import { Event } from '@angular/router';

import { Collection } from '../../../services/models/collection.model';
import { CollectionService } from '../../../services/collection.service';

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
