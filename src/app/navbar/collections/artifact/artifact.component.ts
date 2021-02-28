import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionService } from '../../../services/collection.service';
// import { ArtifactService } from './artifact.service';
import { Artifact } from '../../../services/models/artifact.model';

@Component({
    selector: 'app-artifact',
    // template: 
    //     `<div class="container-fluid">
    //         <h4>Collections:</h4>
    //         <div class="collection-gallery">
    //             <app-collection-preview 
    //                 *ngFor="let collectionPreview of collections; let i = index;"
    //                 [collection]="collectionPreview"
    //                 [index]="i">
    //             </app-collection-preview>
    //         </div>
    //     </div>`,

    templateUrl: './artifact.component.html',
    styleUrls: ['./artifact.component.css'],
    host: {'class': 'artifact-gallery'}
    })
export class ArtifactComponent implements OnInit {
    @Input() artifact: Artifact;
    @Input() index: number;
    // artifactProfile: boolean;
    
  

    constructor( private collectionService: CollectionService, 
                 private router: Router,
                 private route: ActivatedRoute) { 
        // this.index = this.artifact.id;
        // this.artifactProfile = false;
        
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