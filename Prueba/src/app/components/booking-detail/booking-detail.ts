import { Component, Input } from '@angular/core';
import { Booking } from '../../services/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-detail',
  imports: [CommonModule],
  templateUrl: './booking-detail.html',
  styleUrl: './booking-detail.scss'
})
export class BookingDetail {
  @Input() booking!: Booking | null;

}
