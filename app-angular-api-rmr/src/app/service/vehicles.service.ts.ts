import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleDetail } from '../models/VehicleDetail';

@Injectable({ providedIn: 'root' })
export class VehiclesServiceTs {
  private apiUrl = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) {}

  getVehicle(id: number): Observable<VehicleDetail> {
    return this.http.get<VehicleDetail>(`${this.apiUrl}${id}/`);
  }

  getVehicles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
