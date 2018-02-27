import {Component, OnInit, Input} from '@angular/core';
import {ApiService} from '../../services/wiw_apiResponse.service';
import {UserPosition, PositionsWrapper, Positions} from './positions';
import {FormGroup, FormControl, FormArray} from '@angular/forms';
import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../../user';

@Component({selector: 'app-positions', templateUrl: './positions.component.html', styleUrls: ['./positions.component.scss']})
export class PositionsComponent implements OnInit {
  @Input()UserFeed: User;

  constructor(private apiService: ApiService) {}
  positionsArray: UserPosition[] = [];
  reassignForm: FormGroup;

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
      });
      this.reassignForm = new FormGroup({
          // TODO: add checkbox controls?
      });
  }

  reassignPosition() {
    this.UserFeed.Positions = this.reassignForm.value;
    this
      .apiService
      .reassignPosition(this.UserFeed.Positions)
      .subscribe(res => {});
  }
}
