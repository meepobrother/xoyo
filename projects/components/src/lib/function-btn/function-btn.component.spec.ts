import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionBtnComponent } from './function-btn.component';

describe('FunctionBtnComponent', () => {
  let component: FunctionBtnComponent;
  let fixture: ComponentFixture<FunctionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
