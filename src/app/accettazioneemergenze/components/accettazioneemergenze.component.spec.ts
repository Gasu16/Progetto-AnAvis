import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccettazioneemergenzeComponent } from './accettazioneemergenze.component';

describe('AccettazioneemergenzeComponent', () => {
  let component: AccettazioneemergenzeComponent;
  let fixture: ComponentFixture<AccettazioneemergenzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccettazioneemergenzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccettazioneemergenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
