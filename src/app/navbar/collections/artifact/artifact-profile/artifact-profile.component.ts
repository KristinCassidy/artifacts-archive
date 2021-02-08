import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectionService } from '../../collection/collection.service';

import { Artifact } from '../artifact.model';

@Component({
  selector: 'app-artifact-profile',
  templateUrl: './artifact-profile.component.html',
  styleUrls: ['./artifact-profile.component.css']
})
export class ArtifactProfileComponent implements OnInit {
  @Input() artifact: Artifact;
  @Input() name: string;
  

  constructor(private route: ActivatedRoute, 
              private collectionService: CollectionService) { }

  
  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.name = params['name'];

    //     } 
      
  }

}
