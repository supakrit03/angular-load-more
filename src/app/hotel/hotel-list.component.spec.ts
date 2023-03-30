import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListComponent } from './hotel-list.component';

describe('HotelComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
