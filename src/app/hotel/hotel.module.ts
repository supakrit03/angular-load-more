import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { HotelListComponent } from './hotel-list.component';
import { RateComponent } from './rate/rate.component';
import { ScoreComponent } from './score/score.component';
import { PriceComponent } from './price/price.component';
import { PolicyComponent } from './policy/policy.component';
import { HotelTotalComponent } from './hotel-total/hotel-total.component';

@NgModule({
  declarations: [HotelListComponent, HotelItemComponent, RateComponent, ScoreComponent, PriceComponent, PolicyComponent, HotelTotalComponent],
  imports: [CommonModule],
  exports: [HotelListComponent],
})
export class HotelModule {}
