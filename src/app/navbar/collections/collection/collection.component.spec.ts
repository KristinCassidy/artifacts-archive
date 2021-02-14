import { ComponentFixture,TestBed } from '@angular/core/testing';

import { CollectionComponent } from './collection.component';
import { CollectionService } from './collection.service';

describe('Component: Collection', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [CollectionComponent]
    });
  })
  it('should create the app', () => {
    let fixture = TestBed.createComponent(CollectionComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the collection name from the Collection Service', () => {
    let fixture = TestBed.createComponent(CollectionComponent);
    let app = fixture.debugElement.componentInstance;
    let collectionService = fixture.debugElement.injector.get(CollectionService);
    fixture.detectChanges();
    expect(collectionService.getCollections.name).toEqual(app.collection.name);

  })
});