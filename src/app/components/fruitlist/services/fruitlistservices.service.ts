import { Injectable } from '@angular/core';
import { Fruit } from '../fruits';

@Injectable({
  providedIn: 'root',
})
export class FruitlistService {
  private fruits: Fruit[] = [];

  addFruit(fruitID: number, name: string, type: string): void {
    this.fruits.push({ fruitID, name, type });
  }

  editFruit(fruitID: number, name: string, type: string): void {
    const fruit = this.fruits.find(f => f.fruitID === fruitID);
    if (fruit) {
      fruit.name = name;
      fruit.type = type;
    }
  }

  deleteFruit(fruitID: number): void {
    this.fruits = this.fruits.filter(f => f.fruitID !== fruitID);
  }

  getFruits(): Fruit[] {
    return this.fruits;
  }
}
