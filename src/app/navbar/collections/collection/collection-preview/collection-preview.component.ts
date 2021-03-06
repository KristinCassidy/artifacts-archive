import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Collection } from '../../../../services/models/collection.model';

@Component({
	selector: 'app-collection-preview',
	templateUrl: './collection-preview.component.html',

	styleUrls: ['./collection-preview.component.css'],
	host: {'class': 'collection-gallery'}
})
export class CollectionPreviewComponent implements OnInit {
	@Input() collection: Collection;
	@Input() index: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
	}

	getImage() {
		return `url(${this.collection.imagePath})`;
	}

}
