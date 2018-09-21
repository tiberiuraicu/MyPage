import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerUserComponent } from './messenger-user.component';

describe('MessengerUserComponent', () => {
  let component: MessengerUserComponent;
  let fixture: ComponentFixture<MessengerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
