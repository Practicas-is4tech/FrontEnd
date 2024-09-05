import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapickers2Component } from './datapickers2.component';

describe('Datapickers2Component', () => {
  let component: Datapickers2Component;
  let fixture: ComponentFixture<Datapickers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datapickers2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datapickers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
