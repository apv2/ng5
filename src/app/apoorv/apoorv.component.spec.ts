import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoorvComponent } from './apoorv.component';

describe('ApoorvComponent', () => {
  let component: ApoorvComponent;
  let fixture: ComponentFixture<ApoorvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoorvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoorvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
