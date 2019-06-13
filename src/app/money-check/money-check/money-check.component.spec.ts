import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCheckComponent } from './money-check.component';

describe('MoneyCheckComponent', () => {
  let component: MoneyCheckComponent;
  let fixture: ComponentFixture<MoneyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
