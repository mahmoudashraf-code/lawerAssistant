import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleryComponent } from './salery.component';

describe('SaleryComponent', () => {
  let component: SaleryComponent;
  let fixture: ComponentFixture<SaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
