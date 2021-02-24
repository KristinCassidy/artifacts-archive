
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionService } from '../../../../services/collection.service';
import { Artifact } from '../../../../models/artifact.model';

@Component({
  	selector: 'app-artifact-profile',
  	templateUrl: './artifact-profile.component.html',
  	styleUrls: ['./artifact-profile.component.css']
})
export class ArtifactProfileComponent implements OnInit {
	artifact: Artifact;
	@Input() collections;

	constructor( 
		private route: ActivatedRoute, 
		private collectionService: CollectionService) { 
	  		this.artifact = new Artifact( 'key1', 1, 'Keys', '/assets/keys/key-2.jpg','', '1920', 'steel')
			this.collections = this.collectionService.collections;
		}

  	ngOnInit() {
	// this.subscription = this.collectionService.artifactSelected.subscribe(
	//     (index: number) => {
	//         this.selectedItemIndex = index;
	//         // this.selectedItem = this.collectionService.getArtifact(index);
	//     }
	// );
 	}

  	getImage() {
		return `url(${this.artifact.imagePath})`;
	}


// this.route.params
// .subscribe(
//   (params: Params) => {
//     this.id = +params['id'];
//     this.collection = this.collectionService.getCollection(this.id);
//   }
// );
}