import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://localhost:7063/api/Reservation';

  constructor(private http : HttpClient) { }
  getAllReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
