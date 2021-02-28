import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CollectionService } from '../../../../services/collection.service';
import { map } from 'rxjs/operators';
import { Collection } from '../../../../services/models/collection.model';
import { Artifact } from '../../../../services/models/artifact.model';

@Component({
  selector: 'app-add-artifact',
  templateUrl: './add-artifact.component.html',
  styleUrls: ['./add-artifact.component.css']
})
export class AddArtifactComponent implements OnInit {
  addArtifact: FormGroup;
  collections;
  materials: String[];
  ceramics: String[];
  controls;

 
  constructor(private formBuilder:FormBuilder,
              private collectionService: CollectionService,
              private http: HttpClient) {
      
      
      // this. ceramics = ['Porcelain','Fine Earthenware', 'Corse Earthenware', 'Stoneware'];
    }

  ngOnInit() {
    this.addArtifact = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'collection': new FormControl(null, Validators.required),
      'age': new FormControl(null),
      'material': new FormControl(null),
      'desc': new FormControl(null),
      'image': new FormControl (null),
      'keywords': new FormArray([])
      });
      this.collections = this.collectionService.getCollections(); 
      this.materials = ['Ceramic', 'Glass', 'Metal', 'Plastic', 'Stone', 'Organic','Other'];
  }
  
  onSubmit(formData: {title: string, collection: string, age: string, material: string, desc: string, image: string, keywords: [] }) {
    this.http.post('https://artifacts-archive-default-rtdb.firebaseio.com/artifacts.json', formData);
    // this.addArtifact
    //  ).subscribe( (responseData) => {
    //   console.log(responseData);
  //  })
   this.addArtifact.reset();
  }

  onReset() {
    this.addArtifact.reset();
  }

  onAddKeyword() {
    const control = new FormControl(null, Validators.required);
   (<FormArray>this.addArtifact.get('keywords')).push(control);
  }

  // private fetchArtifacts() {
  //   this.http.get('https://artifacts-archive-default-rtdb.firebaseio.com/artifacts.json')
  //   .pipe(map(responseData => {
  //     const artifactsArray = [];
  //       for (const key in responseData) {
  //         if(responseData.hasOwnProperty(key)) {
  //           artifactsArray.push({...responseData[key], index: key });
  //         }
  //       }
  //       return artifactsArray;
  //   }))
    
  // }
}

