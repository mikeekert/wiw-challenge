import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './wiw_apiResponse.service';

describe('apiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
