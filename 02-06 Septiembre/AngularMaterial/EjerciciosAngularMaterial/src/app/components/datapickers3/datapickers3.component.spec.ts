import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapickers3Component } from './datapickers3.component';

describe('Datapickers3Component', () => {
  let component: Datapickers3Component;
  let fixture: ComponentFixture<Datapickers3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datapickers3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datapickers3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
