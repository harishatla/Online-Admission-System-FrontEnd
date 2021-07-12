import { TestBed } from '@angular/core/testing';

import { CollegeViewService } from './college-view.service';

describe('CollegeViewService', () => {
  let service: CollegeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
