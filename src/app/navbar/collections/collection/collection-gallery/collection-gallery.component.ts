import { Component, OnInit } from '@angular/core';

import { Collection } from '../../../../models/collection.model';
import { CollectionService } from '../../../../services/collection.service';

@Component({
	selector: 'app-collection-gallery',
	template: 
				`<div class="container-fluid">
					<div class="subheader">
						<div class="collection-name">   
				   			<h4>Collections:</h4>   
						</div>
						<div class="edit-icons">
							<a class="add">
								<img src="assets/icons/add.png" alt="">
							</a>
							<a>
								<img src="assets/icons/info-outline.svg" alt="">
							</a>
							<a class="edit">
								<img src="assets/icons/icon-edit_24px.svg">
							</a>
						</div>
					</div>
					
				 	<div class="collection-gallery">
						<app-collection-preview 
							*ngFor="let collectionPreview of collections; let i = index;"
							[collection]="collectionPreview"
							[index]="i">
						</app-collection-preview>
					</div>
				 </div>`,

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
