import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionLogComponent } from './excursion-log.component';

describe('ExcursionLogComponent', () => {
  let component: ExcursionLogComponent;
  let fixture: ComponentFixture<ExcursionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
