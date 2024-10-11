import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeelistService } from './services/employeeservice.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent {
  empID = 0;
  empName = '';
  empDept = '';
  isEditing = false;

  constructor(private employeeService: EmployeelistService) {}

  addEmployee(): void {
    if (this.isEditing) {
      this.employeeService.editEmployee(this.empID, this.empName, this.empDept);
      this.isEditing = false; // reset editing mode
    } else {
      this.employeeService.addEmployee(this.empID, this.empName, this.empDept);
    }

    this.resetForm();
  }

  editEmployee(employee: Employee): void {
    this.empID = employee.empID;
    this.empName = employee.name;
    this.empDept = employee.department;
    this.isEditing = true; // activate editing mode
  }

  deleteEmployee(empID: number): void {
    this.employeeService.deleteEmployee(empID);
  }

  getEmployees(): Employee[] {
    return this.employeeService.getEmployees();
  }

  resetForm(): void {
    this.empID = 0;
    this.empName = '';
    this.empDept = '';
    this.isEditing = false;
  }
}
