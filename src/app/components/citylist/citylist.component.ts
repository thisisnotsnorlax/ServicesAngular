import { Component } from '@angular/core';
import { Cities } from './city';
import { CitylitserviceService } from './services/citylitservice.service';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']  // Fixed 'styleUrl' to 'styleUrls'
})
export class CitylistComponent {

  name = '';
  isEditing = false;

  constructor(private cityService: CitylitserviceService) {}  // Injecting the service, not the model

  addCity(): void {  // Renamed from 'addBook'
    if (this.isEditing) {
      this.cityService.editCity(this.name, this.name);  // You need to pass both oldName and newName when editing
      this.isEditing = false;
    } else {
      this.cityService.addCity(this.name);
    }
    this.resetForm();
  }

  getCities(): Cities[] {  // Renamed from 'getCity'
    return this.cityService.getCity();
  }

  editCity(city: Cities): void {  // Renamed from 'editBook'
    this.name = city.name;  // Set the city name for editing
    this.isEditing = true;
  }

  deleteCity(name: string): void {  // Renamed from 'deleteBook'
    this.cityService.deleteCity(name);  // Call the delete method from the service
  }

  resetForm(): void {
    this.name = '';
    this.isEditing = false;
  }
}
