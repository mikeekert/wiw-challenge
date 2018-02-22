import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
    this.apiUriBase = environment.wiw_url;
  }

  private apiUriBase: string;
  private feedApiUrn: string;
  feed: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'W-Token': environment.token
    })
  };

  getUserInfo() {
    this.feedApiUrn = `Account`;
    const apiUrl = `${this.apiUriBase}/${this.feedApiUrn}`;
    return this
      .http
      .get(apiUrl, this.httpOptions)
      .subscribe(data => this.feed); // TODO: write interface for typechecking return
  }
}
