import { Injectable } from '@angular/core';
import { Cities } from '../city';

@Injectable({
  providedIn: 'root'
})
export class CitylitserviceService {

  private cities: Cities[] = [];

  constructor() {}

  addCity(name: string): void {
    const newCity: Cities = { name };  // Create a new city object with the given name
    this.cities.push(newCity);
  }

  getCity(): Cities[] {
    return this.cities;
  }

  editCity(oldName: string, newName: string): void {
    const city = this.cities.find(city => city.name === oldName);  // Find the city by the old name
    if (city) {
      city.name = newName;  // Update the city's name if found
    }
  }

  deleteCity(name: string): void {
    this.cities = this.cities.filter(city => city.name !== name);  // Remove the city with the matching name
  }
}
