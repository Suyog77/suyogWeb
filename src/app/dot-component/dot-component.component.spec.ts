import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotComponentComponent } from './dot-component.component';

describe('DotComponentComponent', () => {
  let component: DotComponentComponent;
  let fixture: ComponentFixture<DotComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotComponentComponent]
    });
    fixture = TestBed.createComponent(DotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
