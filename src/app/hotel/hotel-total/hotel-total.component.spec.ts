import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTotalComponent } from './hotel-total.component';

describe('HotelTotalComponent', () => {
  let component: HotelTotalComponent;
  let fixture: ComponentFixture<HotelTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
