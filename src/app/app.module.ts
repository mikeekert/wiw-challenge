import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from '../app/routing/app-routing.module';
import {AppComponent} from './app.component';
import {ApiService} from './services/wiw_apiResponse.service';
import {UserProfileModule} from './user-profile/user-profile.module';
import {NavComponent} from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, UserProfileModule, ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
