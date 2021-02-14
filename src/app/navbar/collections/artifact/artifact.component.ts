import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionService } from '../collection/collection.service';
// import { ArtifactService } from './artifact.service';
import { Artifact } from './artifact.model';

@Component({
    selector: 'app-artifact',
    templateUrl: './artifact.component.html',
    styleUrls: ['./artifact.component.css'],
    host: {'class': 'artifact-gallery'}
    })
export class ArtifactComponent implements OnInit {
    @Input() artifact: Artifact;
    @Input() index: number;
  

    constructor(private collectionService: CollectionService, private router: Router,private route: ActivatedRoute) { 
        // this.index = this.artifact.id;
    }

    ngOnInit() {
        // this.route.params
        // .subscribe(
        //     (params: Params) => {
        //     this.name = params['name'];
        //     // this.artifact= this.collectionService.getArtifact(this.name);
        //     }
        // );
    }

    getImage() {
        return `url(${this.artifact.imagePath})`;
    }

    // getArtifact() {
    //     return this.artifact;
    // }

}