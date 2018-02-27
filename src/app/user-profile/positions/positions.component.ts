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
  loaded: boolean;

  ngOnInit() {
    this
      .apiService
      .getAllPositions()
      .subscribe(res => {
        const group = {};
        // if any iteration of AllPositions is found in (UserFeed.Positions / assigned)
        // mark i.assigned as true
        for (const i of res.positions) {
          const found = this
            .UserFeed
            .Positions
            .includes(i.id);
          if (found) {
            i.assigned = true;
          }
          this
            .positionsArray
            .push(new UserPosition(i));

          // created loop to generate angular form control 'names' based on the IDs of the
          // positions
          group[`${i.id}`] = '';
        }
        this.loaded = true;

        // creating the form control group using array of IDs
        this.reassignForm = this
          .fb
          .group(group);
      });
  }

  reassign(e) {
    const assignedArray = e.value;
    const positionIds = Object.keys(assignedArray);
    // angular dynamicform checkboxes return true/false as a value, searching array
    // and returning position IDs that are marked true at time of submit
    const filtered: any[] = positionIds.filter(function (key) {
      return assignedArray[key];
    });

    this.UserFeed.Positions = filtered;
    this
      .apiService
      .reassignPosition(this.UserFeed)
      .subscribe(res => {
        this
          .apiService
          .getAssignedPositions(this.UserFeed)
          .subscribe(resp => {
            this.UserFeed.Positions = resp.user.positions;
          });
      });
  }
}
