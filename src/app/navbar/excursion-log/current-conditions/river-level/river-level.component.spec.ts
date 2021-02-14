import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverLevelComponent } from './river-level.component';

describe('RiverLevelComponent', () => {
  let component: RiverLevelComponent;
  let fixture: ComponentFixture<RiverLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
