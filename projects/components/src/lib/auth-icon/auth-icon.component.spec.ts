import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIconComponent } from './auth-icon.component';

describe('AuthIconComponent', () => {
  let component: AuthIconComponent;
  let fixture: ComponentFixture<AuthIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
