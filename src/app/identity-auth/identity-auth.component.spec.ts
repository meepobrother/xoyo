import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityAuthComponent } from './identity-auth.component';

describe('IdentityAuthComponent', () => {
  let component: IdentityAuthComponent;
  let fixture: ComponentFixture<IdentityAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
