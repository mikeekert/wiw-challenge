import {Component, OnInit, Input} from '@angular/core';
import {ApiService} from '../../services/wiw_apiResponse.service';
import {UserPosition, PositionsWrapper, Positions} from './positions';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../../user';

@Component({selector: 'app-positions', templateUrl: './positions.component.html', styleUrls: ['./positions.component.scss']})
export class PositionsComponent implements OnInit {
  @Input()UserFeed: User;

  constructor(private apiService: ApiService, private fb: FormBuilder) {}
  positionsArray: UserPosition[] = [];
  reassignForm: FormGroup;

  ngOnInit() {
    this
      .apiService
      .getAllPositions()
      .subscribe(res => {
        const group = {};
        for (const i of res.positions) {
          // created loop to generate angular form control 'names' based on the IDs of the positions
          this
            .positionsArray
            .push(new UserPosition(i));
          group[`${i.id}`] = '';
        }
        // creating the form control group with the list of IDs
        this.reassignForm = this
          .fb
          .group(group);
      });
  }

  reassignPosition(e) {
    const assignedArray = e.value;
    const positionIds = Object.keys(assignedArray);
    const filtered: any[] = positionIds.filter(function(key) {
      return assignedArray[key];
  });
    this.UserFeed.Positions = filtered;
    this
      .apiService
      .reassignPosition(this.UserFeed)
      .subscribe(res => {
      });
  }
}
