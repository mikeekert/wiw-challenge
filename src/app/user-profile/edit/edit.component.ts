import {Component, OnInit, Input} from '@angular/core';
import {ApiUserResponse} from '../../user';

@Component({selector: 'app-edit', templateUrl: './edit.component.html', styleUrls: ['./edit.component.scss']})
export class EditComponent implements OnInit {

  @Input()userFeed: ApiUserResponse;

  ngOnInit() {}

}
