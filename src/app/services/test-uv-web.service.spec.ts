import { TestBed } from '@angular/core/testing';

import { TestUvWebService } from './test-uv-web.service';

describe('TestUvWebService', () => {
  let service: TestUvWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUvWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
