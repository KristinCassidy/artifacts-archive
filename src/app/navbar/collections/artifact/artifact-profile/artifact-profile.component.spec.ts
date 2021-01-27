import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactProfileComponent } from './artifact-profile.component';

describe('ArtifactProfileComponent', () => {
  let component: ArtifactProfileComponent;
  let fixture: ComponentFixture<ArtifactProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
