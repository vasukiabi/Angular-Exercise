import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoDComponent } from './ho-d.component';

describe('HoDComponent', () => {
  let component: HoDComponent;
  let fixture: ComponentFixture<HoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
