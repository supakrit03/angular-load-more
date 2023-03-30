import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Hotel } from './hotel.interface';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent {
  @Input() hotels: Hotel[] = [];
  @Input() loading: boolean = false;
  @Input() isOutOfRange: boolean = false;

  @Output() onClickLoadMoreEvent = new EventEmitter<number>();

  getHotelsLength() {
    return this.hotels.length;
  }

  onClickLoadMore() {
    this.onClickLoadMoreEvent.emit(this.getHotelsLength());
  }
}
