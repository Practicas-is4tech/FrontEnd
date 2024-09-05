import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cambio30sComponent } from './cambio30s.component';

describe('Cambio30sComponent', () => {
  let component: Cambio30sComponent;
  let fixture: ComponentFixture<Cambio30sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cambio30sComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cambio30sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
