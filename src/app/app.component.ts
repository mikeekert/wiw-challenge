import { Component } from '@angular/core';
import * as $ from 'jquery';

import { HeroService } from '../app/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
