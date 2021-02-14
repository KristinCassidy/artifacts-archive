import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Artifact } from '../artifact/artifact.model';
import { Collection } from './collection.model';
import { CollectionService } from './collection.service';

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


  constructor(private collectionService: CollectionService,
              private route: ActivatedRoute,
              private router: Router) { }

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

}
