import { Component } from '@angular/core';
import { Fruit } from './fruits';
import { FruitlistService } from './services/fruitlistservices.service';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css'],
})
export class FruitlistComponent {
  fruitID = 0;
  fruitName = '';
  fruitType = '';
  isEditing = false;

  constructor(private fruitlistService: FruitlistService) {}

  addFruit(): void {
    if (this.isEditing) {
      this.fruitlistService.editFruit(this.fruitID, this.fruitName, this.fruitType);
      this.isEditing = false; // reset editing mode
    } else {
      this.fruitlistService.addFruit(this.fruitID, this.fruitName, this.fruitType);
    }
    this.resetForm();
  }

  editFruit(fruit: Fruit): void {
    this.fruitID = fruit.fruitID;
    this.fruitName = fruit.name;
    this.fruitType = fruit.type;
    this.isEditing = true; // activate editing mode
  }

  deleteFruit(fruitID: number): void {
    this.fruitlistService.deleteFruit(fruitID);
  }

  getFruits(): Fruit[] {
    return this.fruitlistService.getFruits();
  }

  resetForm(): void {
    this.fruitID = 0;
    this.fruitName = '';
    this.fruitType = '';
    this.isEditing = false;
  }
}
