import { Component } from '@angular/core';
import { Course } from './course';
import { CourseListService } from './services/courseservices.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
})
export class CourseListComponent {
  courseCode = '';
  courseName = '';
  instructor = '';
  isEditing = false;

  constructor(private courseService: CourseListService) {}

  addCourse(): void {
    if (this.isEditing) {
      this.courseService.editCourse(this.courseCode, this.courseName, this.instructor);
      this.isEditing = false;
    } else {
      this.courseService.addCourse(this.courseCode, this.courseName, this.instructor);
    }
    this.resetForm();
  }

  getCourses(): Course[] {
    return this.courseService.getCourses();
  }

  editCourse(course: Course): void {
    this.courseCode = course.courseCode;
    this.courseName = course.courseName;
    this.instructor = course.instructor;
    this.isEditing = true;
  }

  deleteCourse(courseCode: string): void {
    this.courseService.deleteCourse(courseCode);
  }

  resetForm(): void {
    this.courseCode = '';
    this.courseName = '';
    this.instructor = '';
    this.isEditing = false;
  }
}
