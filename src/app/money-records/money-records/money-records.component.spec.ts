import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyRecordsComponent } from './money-records.component';

describe('MoneyRecordsComponent', () => {
  let component: MoneyRecordsComponent;
  let fixture: ComponentFixture<MoneyRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
