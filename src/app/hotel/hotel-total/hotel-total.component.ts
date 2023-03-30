import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-total',
  templateUrl: './hotel-total.component.html',
  styleUrls: ['./hotel-total.component.css'],
})
export class HotelTotalComponent {
  @Input() total: number = 0;
}
