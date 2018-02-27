import {TestBed, inject} from '@angular/core/testing';
import {ApiService} from './wiw_apiResponse.service';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';

describe('apiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService, HttpClient, HttpHandler]});
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
