import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseOverComponent } from './mouse-over.component';

describe('MouseOverComponent', () => {
  let component: MouseOverComponent;
  let fixture: ComponentFixture<MouseOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
