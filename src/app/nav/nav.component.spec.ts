import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NavComponent} from './nav.component';
import {DebugElement} from '@angular/core';

describe('NavComponent', () => {
  let comp: NavComponent;
  let fixture: ComponentFixture < NavComponent >;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({declarations: [NavComponent]})
      .compileComponents();

    de = fixture
      .debugElement
      .query(By.css('.wiw-nav'));
    el = de.nativeElement;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show logout link when logged in', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Logout');
  });
});
