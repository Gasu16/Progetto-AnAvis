import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceglirichiestaComponent } from './sceglirichiesta.component';

describe('SceglirichiestaComponent', () => {
  let component: SceglirichiestaComponent;
  let fixture: ComponentFixture<SceglirichiestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceglirichiestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceglirichiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
