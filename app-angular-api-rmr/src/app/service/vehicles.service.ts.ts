import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesResponse } from '../models/VehiclesResponse';

@Injectable({ providedIn: 'root' })
export class VehiclesServiceTs {
  private apiUrl = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) {}
  getVehicleList(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>('https://swapi.dev/api/vehicles/');
  }
}
