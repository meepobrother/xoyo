import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVerifiedComponent } from './id-verified.component';

describe('IdVerifiedComponent', () => {
  let component: IdVerifiedComponent;
  let fixture: ComponentFixture<IdVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdVerifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
