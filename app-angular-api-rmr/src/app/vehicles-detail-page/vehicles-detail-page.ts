import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesServiceTs } from '../service/vehicles.service.ts';
import { VehicleDetail } from '../models/VehicleDetail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles-detail-page',
  imports: [CommonModule],
  templateUrl: './vehicles-detail-page.html',
  styleUrls: ['./vehicles-detail-page.css']
})
export class VehiclesDetailPage implements OnInit {
  vehicle: VehicleDetail | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: VehiclesServiceTs
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehiclesService.getVehicle(+id).subscribe({
        next: (data) => {
          this.vehicle = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching vehicle:', error);
          this.loading = false;
        }
      });
    }
  }
}