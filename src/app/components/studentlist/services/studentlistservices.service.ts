import { Injectable } from '@angular/core';
import { Students } from '../student';
@Injectable({
  providedIn: 'root',
})
export class StudentlistService {
  private students: Students[] = [];

  constructor() {}

  addStudent(studNum: number, name: string, section: string): void {
    const newStudent: Students = { studNum, name, section };
    this.students.push(newStudent);
  }

  getStudents(): Students[] {
    return this.students;
  }
}
