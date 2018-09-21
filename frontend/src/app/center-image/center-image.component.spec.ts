import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterImageComponent } from './center-image.component';

describe('CenterImageComponent', () => {
  let component: CenterImageComponent;
  let fixture: ComponentFixture<CenterImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
