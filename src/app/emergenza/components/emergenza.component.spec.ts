import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenzaComponent } from './emergenza.component';

describe('EmergenzaComponent', () => {
  let component: EmergenzaComponent;
  let fixture: ComponentFixture<EmergenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
