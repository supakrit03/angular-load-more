import { Component, Input } from '@angular/core';
import type { Hotel } from '../hotel.interface';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent {
  @Input() policy: Hotel['policy'] = {
    breakfast_included: false,
    free_cancellation: false,
  };
}
