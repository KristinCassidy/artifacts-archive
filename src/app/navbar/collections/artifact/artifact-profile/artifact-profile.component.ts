
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionService } from '../../collection/collection.service';
import { Artifact } from '../artifact.model';

@Component({
  selector: 'app-artifact-profile',
  templateUrl: './artifact-profile.component.html',
  styleUrls: ['./artifact-profile.component.css']
})
export class ArtifactProfileComponent implements OnInit {
@Input() artifact: Artifact;
 
  

    constructor( private route: ActivatedRoute, private collectionService: CollectionService) { 
    }

  
  ngOnInit() {
    // this.subscription = this.collectionService.artifactSelected.subscribe(
    //     (index: number) => {
    //         this.selectedItemIndex = index;
    //         // this.selectedItem = this.collectionService.getArtifact(index);
    //     }
    // );
  }

//   ngOnDestroy() {
//       this.subscription.unsubscribe();
//   }

}
// this.route.params
// .subscribe(
//   (params: Params) => {
//     this.id = +params['id'];
//     this.collection = this.collectionService.getCollection(this.id);
//   }
// );