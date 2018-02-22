import {Component, OnInit} from '@angular/core';
import {ApiService} from '../app/api.service';
import * as $ from 'jquery';
import { User } from '../app/user';
import { Observable } from 'rxjs/Observable';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent implements OnInit {

  userFeed: User[];
  constructor(private apiService: ApiService) {}
  title = 'app';

  ngOnInit() {
    this
      .apiService
      .getUserInfo()
      .subscribe(res => {
        this.userFeed = [res];
        console.log(this.userFeed);
      });
  }
}
