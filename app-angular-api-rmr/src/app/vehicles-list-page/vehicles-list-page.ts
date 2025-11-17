import { Component, OnInit } from '@angular/core';
import { VehiclesServiceTs } from '../service/vehicles.service.ts';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './vehicles-list-page.html',
  styleUrls: ['./vehicles-list-page.css'],
})
export class VehiclesListPage implements OnInit {
  vehicles: any[] = [];

  constructor(private vehiclesService: VehiclesServiceTs) {}

  ngOnInit(): void {
    this.vehiclesService.getVehicles().subscribe((data) => {
      this.vehicles = data.results;
    });
  }

  getVehicleId(url: string): string {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : '';
  }
}