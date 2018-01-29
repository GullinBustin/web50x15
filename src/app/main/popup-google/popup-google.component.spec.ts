import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGoogleComponent } from './popup-google.component';

describe('PopupGoogleComponent', () => {
  let component: PopupGoogleComponent;
  let fixture: ComponentFixture<PopupGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
