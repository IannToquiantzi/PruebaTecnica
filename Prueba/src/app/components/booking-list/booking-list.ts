import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingService, Booking} from '../../services/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-list',
  imports: [CommonModule],
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.scss'
})
export class BookingList implements OnInit {
  bookings: Booking[] = [];
  @Output() selectBooking = new EventEmitter<Booking>();

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
      this.bookingService.getBookings().subscribe(data => this.bookings = data);
  }

  onSelect(booking: Booking): void {
    this.selectBooking.emit(booking);
  }

}
