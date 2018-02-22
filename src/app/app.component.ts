import {Component, OnInit} from '@angular/core';
import {ApiService} from '../app/api.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  title = 'app';

  ngOnInit() {
    this.apiService.getUserInfo();
  }
}
