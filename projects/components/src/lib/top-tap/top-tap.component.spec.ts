import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTapComponent } from './top-tap.component';

describe('TopTapComponent', () => {
  let component: TopTapComponent;
  let fixture: ComponentFixture<TopTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
