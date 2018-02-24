import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

import {ApiUserResponse} from '../../app/user';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
    this.apiUriBase = environment.wiw_url;
  }
  private apiUriBase: string;
  private feedApiUrn: string;
  data = {};

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'W-Token': environment.token})
  };

  getUserInfo() {
    this.feedApiUrn = `users/profile`;
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this.http.get < ApiUserResponse > (apiUrl, this.httpOptions);
  }

  updateUserInfo(userInfo) {
    this.feedApiUrn = `users/profile`;
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    const data = {
      'first_name': userInfo.first_name,
      'last_name': userInfo.last_name,
      'email': userInfo.email
    };
    return this.http.post < ApiUserResponse > (apiUrl, data, this.httpOptions);
  }
}
