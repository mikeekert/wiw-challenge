import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details/details.component';
import {UserProfileComponent} from './user-profile.component';
import {PositionsComponent} from './positions/positions.component';
import {EditComponent} from './edit/edit.component';
import {ApiService} from '../services/wiw_apiResponse.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [
    DetailsComponent, UserProfileComponent, PositionsComponent, EditComponent
  ],
  exports: [DetailsComponent, UserProfileComponent, PositionsComponent]
})
export class UserProfileModule implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
