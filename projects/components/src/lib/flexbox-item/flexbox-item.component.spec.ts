import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxItemComponent } from './flexbox-item.component';

describe('FlexboxItemComponent', () => {
  let component: FlexboxItemComponent;
  let fixture: ComponentFixture<FlexboxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
