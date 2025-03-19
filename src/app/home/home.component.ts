import { Component, inject, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation'; // Import the interface
import { HousingService } from '../housing.service'; // Import the service
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);
  constructor(){
  //setting housingLocationlist to the data array in HousingService
  this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  }