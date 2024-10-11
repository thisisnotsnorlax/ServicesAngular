import { Injectable } from '@angular/core';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeelistService {
  private employees: Employee[] = [];

  constructor() {}

  addEmployee(empID: number, name: string, department: string): void {
    const newEmployee: Employee = { empID, name, department };
    this.employees.push(newEmployee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  editEmployee(empID: number, name: string, department: string): void {
    const employee = this.employees.find((emp) => emp.empID === empID);
    if (employee) {
      employee.name = name;
      employee.department = department;
    }
  }

  deleteEmployee(empID: number): void {
    this.employees = this.employees.filter((emp) => emp.empID !== empID);
  }
}
