import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlepagesectionComponent } from './middlepagesection.component';

describe('MiddlepagesectionComponent', () => {
  let component: MiddlepagesectionComponent;
  let fixture: ComponentFixture<MiddlepagesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlepagesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlepagesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
