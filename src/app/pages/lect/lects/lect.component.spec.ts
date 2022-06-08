import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectComponent } from './lect.component';

describe('LectComponent', () => {
  let component: LectComponent;
  let fixture: ComponentFixture<LectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
