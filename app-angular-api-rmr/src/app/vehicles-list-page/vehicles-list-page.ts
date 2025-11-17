import { Component, OnInit } from '@angular/core';
import { VehiclesServiceTs } from '../service/vehicles.service.ts';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [],
  templateUrl: './vehicles-list-page.html',
  styleUrls: ['./vehicles-list-page.css'],
})
export class VehiclesListPage implements OnInit {
  vehicles: any[] = [];

  constructor(private vehiclesResponse: VehiclesServiceTs) {}
  ngOnInit() {
    this.vehiclesResponse.getVehicleList().subscribe((data) => {
      this.vehicles = data.results;
    });
  }
}
