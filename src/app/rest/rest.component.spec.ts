import { ComponentFixture, TestBed } from '@angular/core/testing';

import { restComponent } from './rest.component';

describe('RestComponent', () => {
  let component: restComponent;
  let fixture: ComponentFixture<restComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [restComponent]
    });
    fixture = TestBed.createComponent(restComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
