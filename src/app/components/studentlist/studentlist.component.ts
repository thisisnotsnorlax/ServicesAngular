import { Component } from '@angular/core';
import { Students } from './student';
import { StudentlistService } from './services/studentlistservices.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'], // Corrected styleUrl to styleUrls
})
export class StudentlistComponent {
  studID = 0;
  studName = '';
  studSec = '';

  constructor(private studentService: StudentlistService) {}

  addStudents(): void {
    this.studentService.addStudent(this.studID, this.studName, this.studSec);

    this.studID = 0;
    this.studName = '';
    this.studSec = '';
  }

  getStudents(): Students[] {
    return this.studentService.getStudents();
  }
}
