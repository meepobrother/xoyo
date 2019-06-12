import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOuterComponent } from './section-outer.component';

describe('SectionOuterComponent', () => {
  let component: SectionOuterComponent;
  let fixture: ComponentFixture<SectionOuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
