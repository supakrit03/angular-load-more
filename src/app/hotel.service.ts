import { Injectable } from '@angular/core';
import hotels from '../assets/hotel-list-mock-data.json';

import { of, delay } from 'rxjs';
import { Hotel } from './hotel/hotel.interface';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor() {}

  hotelsMock: Hotel[] = hotels;

  getHotels(page = 1, limit = 50) {
    const startAt = (Number(page) - 1) * Number(limit);
    const endAt = Number(page) * Number(limit);
    const data = this.hotelsMock.slice(startAt, endAt);

    const total = this.hotelsMock.length;

    return of({ data, total }).pipe(delay(1000));
  }
}
