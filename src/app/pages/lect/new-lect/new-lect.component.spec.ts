import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLectComponent } from './new-lect.component';

describe('NewLectComponent', () => {
  let component: NewLectComponent;
  let fixture: ComponentFixture<NewLectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
