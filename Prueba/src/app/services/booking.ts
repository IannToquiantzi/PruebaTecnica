import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Booking {
  id: number;
  name: string;
  teacher: string;
  slots: number;
}


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings(): Observable<Booking[]> {
    return of([
      { id: 1, name: 'Yoga', teacher: 'Laura', slots: 10 },
      { id: 2, name: 'Pilates', teacher: 'Carlos', slots: 8 },
      { id: 3, name: 'Boxeo', teacher: 'Ana', slots: 12 },
    ])
  }
  
}
