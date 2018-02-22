import {Component, OnInit} from '@angular/core';
import {ApiService} from '../app/api.service';
import * as $ from 'jquery';
import {User} from '../app/user';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) {}
  userFeed: User[];
  title = 'app';

  ngOnInit() {
    this
      .apiService
      .getUserInfo()
      .subscribe(res => {
        this.userFeed = [res];
        // needed to adjust the api data, to remove extraneous characters at end of url
        this.userFeed[0].user.avatar.url = this
          .userFeed[0]
          .user
          .avatar
          .url
          .slice(0, -3);
      });
  }
}
