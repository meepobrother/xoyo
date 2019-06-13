import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOffLineComponent } from './account-off-line.component';

describe('AccountOffLineComponent', () => {
  let component: AccountOffLineComponent;
  let fixture: ComponentFixture<AccountOffLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOffLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOffLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
