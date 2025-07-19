import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Booking } from './services/booking';
import { BookingList } from './components/booking-list/booking-list';
import { BookingDetail } from './components/booking-detail/booking-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingList, BookingDetail],
  template:`
    <app-booking-list (selectBooking)="onSelect($event)"></app-booking-list>
    <app-booking-detail [booking]="selectBooking"></app-booking-detail>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  selectBooking: Booking | null = null;

  onSelect(booking: Booking) {
    this.selectBooking = booking; 
  }
}
