import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFreezeComponent } from './account-freeze.component';

describe('AccountFreezeComponent', () => {
  let component: AccountFreezeComponent;
  let fixture: ComponentFixture<AccountFreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
