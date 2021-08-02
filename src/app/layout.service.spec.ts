import { TestBed } from '@angular/core/testing';

import { layOutService } from './layout.service';

describe('HeroService', () => {
  let service: layOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(layOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
