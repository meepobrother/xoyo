import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleBtnComponent } from './toogle-btn.component';

describe('ToogleBtnComponent', () => {
  let component: ToogleBtnComponent;
  let fixture: ComponentFixture<ToogleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
