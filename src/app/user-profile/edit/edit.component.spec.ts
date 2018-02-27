import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditComponent} from './edit.component';
import {User} from '../../user';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../../services/wiw_apiResponse.service';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {of} from 'rxjs/observable/of';

class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture < EditComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [ReactiveFormsModule],
      providers: [
        ApiService,
        HttpClient,
        HttpHandler, {
          provide: Router,
          useClass: RouterStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('getuseinfo should return data with async', async(() => {
    const response = {
      'user': {
        'first_name': 'string',
        'last_name': 'string',
        'email': 'string',
        'id': 1,
        'avatar': {
          'url': 'string'
        }
      }
    };
    const apiService = fixture
      .debugElement
      .injector
      .get(ApiService);
    spyOn(apiService, 'getUserInfo')
      .and
      .returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    fixture
      .whenStable()
      .then(() => {
        expect(component.UserFeed).toBeTruthy();
        expect(component.userDetails).toBeTruthy();
      });
  }));
});
