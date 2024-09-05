import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapickersComponent } from './datapickers.component';

describe('DatapickersComponent', () => {
  let component: DatapickersComponent;
  let fixture: ComponentFixture<DatapickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatapickersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
