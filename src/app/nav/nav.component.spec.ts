import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NavComponent} from './nav.component';
import {DebugElement} from '@angular/core';

describe('NavComponent', () => {
  let comp: NavComponent;
  let fixture: ComponentFixture < NavComponent >;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({declarations: [NavComponent]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('links should be angular links', () => {
    const links = fixture.nativeElement.querySelector('.nav-link');
    expect(links.getAttribute('routerlink')).toBeTruthy();
  });
});
