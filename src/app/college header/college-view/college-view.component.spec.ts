import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeViewComponent } from './college-view.component';

describe('CollegeViewComponent', () => {
  let component: CollegeViewComponent;
  let fixture: ComponentFixture<CollegeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
