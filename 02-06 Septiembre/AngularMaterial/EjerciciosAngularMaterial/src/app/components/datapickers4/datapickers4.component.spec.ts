import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapickers4Component } from './datapickers4.component';

describe('Datapickers4Component', () => {
  let component: Datapickers4Component;
  let fixture: ComponentFixture<Datapickers4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datapickers4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datapickers4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
