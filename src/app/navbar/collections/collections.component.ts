import { Component, OnInit } from '@angular/core';
import { Collection } from '../../models/collection.model';

@Component({
    selector: 'app-collections',
    template: `<div class="container-fluid">
                    <router-outlet></router-outlet>
               </div>`,
    styles: [''],
    host: {'class': 'container-fluid'}
})

export class CollectionsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}
