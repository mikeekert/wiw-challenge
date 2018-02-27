import {Component, OnInit, Input} from '@angular/core';
import {ApiUserResponse, User} from '../user';
import {ApiService} from '../services/wiw_apiResponse.service';

@Component({selector: 'app-user-profile', templateUrl: './user-profile.component.html', styleUrls: ['./user-profile.component.scss']})
export class UserProfileComponent implements OnInit {
  UserFeed: User;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this
      .apiService
      .getUserInfo()
      .subscribe(res => {
        this.UserFeed = new User(res);

        // needed to adjust the dev/stage api data, to remove extraneous 'size' characters at end of url
        this.UserFeed.Avatar.Url = this
          .UserFeed
          .Avatar
          .Url
          .slice(0, -3);
      });
  }
}
