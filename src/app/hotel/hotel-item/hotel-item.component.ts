import { Component, Input } from '@angular/core';
import { Hotel } from '../hotel.interface';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css'],
})
export class HotelItemComponent {
  @Input()
  hotel: Hotel = {
    id: '',
    main_photo: '',
    name: '',
    policy: {
      breakfast_included: false,
      free_cancellation: false,
    },
    price: 0,
    score: 0,
  };
}
