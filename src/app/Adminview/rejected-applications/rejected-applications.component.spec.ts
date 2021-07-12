import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedApplicationsComponent } from './rejected-applications.component';

describe('RejectedApplicationsComponent', () => {
  let component: RejectedApplicationsComponent;
  let fixture: ComponentFixture<RejectedApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
