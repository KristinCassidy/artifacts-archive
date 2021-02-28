import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Params, Router } from '@angular/router';

import { Artifact } from '../../../services/models/artifact.model';
import { Collection } from '../../../services/models/collection.model';
import { CollectionService } from '../../../services/collection.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	 @Input() collection: Collection;
	 @Input() id: number;
	 @Input() name: string;
	 artifact: Artifact;
	 artifacts: Artifact[];
	 index: number;
	//  artifactProfile: boolean;


	constructor(private collectionService: CollectionService,
							private route: ActivatedRoute,
							private router: Router) { 
								// this.artifactProfile = false;
							}

	ngOnInit() {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.collection = this.collectionService.getCollection(this.id);
					this.artifacts = this.collection.artifacts;
					this.artifact = this.artifacts[this.index];
				}
			);
	}

	onEditCollection() {
		this.router.navigate(['edit'], {relativeTo: this.route});
	}

	onAddArtifact() {
		this.router.navigate(['add'], {relativeTo: this.route});
	}

	onArtifactProfile() {
	 this.router.navigate(['artifact'], {relativeTo: this.route});
	}

	showInfo(event: Event) {
			let info = document.getElementById("collectionInfo");
			  if ( info.className !== "active") {
				info.className = "active";
			  } else {
				info.className = "!active";
			  };
		  
	}

}
