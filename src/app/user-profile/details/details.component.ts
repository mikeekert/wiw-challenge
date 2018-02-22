import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../user';

@Component({selector: 'app-details', templateUrl: './details.component.html', styleUrls: ['./details.component.scss']})
export class DetailsComponent implements OnInit {
  @Input()userFeed: User;

  ngOnInit() {}
}
