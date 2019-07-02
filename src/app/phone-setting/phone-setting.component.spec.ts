import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSettingComponent } from './phone-setting.component';

describe('PhoneSettingComponent', () => {
  let component: PhoneSettingComponent;
  let fixture: ComponentFixture<PhoneSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
