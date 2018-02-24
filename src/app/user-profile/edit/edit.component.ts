import {Component, Input, OnInit} from '@angular/core';
import {ApiUserResponse, User} from '../../user';
import {FormGroup, FormControl} from '@angular/forms';
import {ApiService} from '../../services/wiw_apiResponse.service';

@Component({selector: 'app-edit', templateUrl: './edit.component.html', styleUrls: ['./edit.component.scss'], providers: []})

export class EditComponent implements OnInit {

  UserFeed: User;
  userDetails: FormGroup;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this
      .apiService
      .getUserInfo()
      .subscribe(res => {
        this.UserFeed = new User(res);
        this.userDetails = new FormGroup({
          'first_name': new FormControl(this.UserFeed.FirstName),
          'last_name': new FormControl(this.UserFeed.LastName),
          'email': new FormControl(this.UserFeed.Email)
        });
      });
  }
  onSubmit() {
    this
      .apiService
      .updateUserInfo(this.userDetails.value);
  }
}
