import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCComponent } from './error-c.component';

describe('ErrorCComponent', () => {
  let component: ErrorCComponent;
  let fixture: ComponentFixture<ErrorCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorCComponent]
    });
    fixture = TestBed.createComponent(ErrorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
