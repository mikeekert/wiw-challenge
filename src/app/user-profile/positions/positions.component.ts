import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/wiw_apiResponse.service';
import {UserPosition, PositionsWrapper} from './positions';

@Component({selector: 'app-positions', templateUrl: './positions.component.html', styleUrls: ['./positions.component.scss']})
export class PositionsComponent implements OnInit {

  constructor(private apiService: ApiService) {}
  positionsArray: UserPosition[] = [];

  ngOnInit() {
    this
      .apiService
      .getPositions()
      .subscribe(res => {
        for (const i of res.positions) {
          this
            .positionsArray
            .push(new UserPosition(i));
        }
        console.log(this.positionsArray);
      });
  }
}
