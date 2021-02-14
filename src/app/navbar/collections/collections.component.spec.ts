import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsComponent } from './collections.component';

describe('Component: Collections', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CollectionsComponent]
        });
    })

    it('should create the app', () => {
        let fixture = TestBed.createComponent(CollectionsComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    })

});