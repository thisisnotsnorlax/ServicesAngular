import { Injectable } from '@angular/core';
import { Course } from '../course';
@Injectable({
  providedIn: 'root',
})
export class CourseListService {
  private courses: Course[] = [];

  constructor() {}

  addCourse(courseCode: string, courseName: string, instructor: string): void {
    const newCourse: Course = { courseCode, courseName, instructor };
    this.courses.push(newCourse);
  }

  getCourses(): Course[] {
    return this.courses;
  }

  editCourse(courseCode: string, courseName: string, instructor: string): void {
    const course = this.courses.find(course => course.courseCode === courseCode);
    if (course) {
      course.courseName = courseName;
      course.instructor = instructor;
    }
  }

  deleteCourse(courseCode: string): void {
    this.courses = this.courses.filter(course => course.courseCode !== courseCode);
  }
}
