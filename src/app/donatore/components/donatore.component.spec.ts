import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatoreComponent } from './donatore.component';

describe('DonatoreComponent', () => {
  let component: DonatoreComponent;
  let fixture: ComponentFixture<DonatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
