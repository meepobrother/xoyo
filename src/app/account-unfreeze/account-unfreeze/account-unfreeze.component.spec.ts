import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUnfreezeComponent } from './account-unfreeze.component';

describe('AccountUnfreezeComponent', () => {
  let component: AccountUnfreezeComponent;
  let fixture: ComponentFixture<AccountUnfreezeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUnfreezeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUnfreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
