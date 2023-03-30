import { Component, OnInit } from '@angular/core';
import { HotelService } from './hotel.service';
import type { Hotel } from './hotel/hotel.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private hotelService: HotelService) {}

  loading: boolean = false;
  hotels: Hotel[] = [];
  currentLimit: number = 50;
  hotelTotal?: number;

  ngOnInit() {
    this.fetchHotels(this.currentLimit);
  }

  fetchHotels(currentLimit: number) {
    this.loading = true;
    return this.hotelService
      .getHotels(1, currentLimit)
      .subscribe(({ data, total }) => {
        this.hotels = data;
        this.hotelTotal = total;
        this.loading = false;
      });
  }

  isOutOfRange() {
    console.log(' this.currentLimit =>', this.currentLimit);

    if (!this.hotelTotal) return false;
    console.log(
      'this.currentLimit >= this.hotelTotal =>',
      this.currentLimit >= this.hotelTotal
    );
    return this.currentLimit >= this.hotelTotal;
  }

  onClickLoadMore(hotelLength: number) {
    const newLimit = hotelLength + 50;
    this.fetchHotels(newLimit);
    this.currentLimit = newLimit;
  }
}
