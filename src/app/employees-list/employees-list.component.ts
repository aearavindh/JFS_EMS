import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  title = 'Employees List';
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
  this.getEmployees();
  } 
  getEmployees(): void{
  this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }
  delete(employee: Employee): void {
  this.employees = this.employees.filter(emp => emp !== employee);
  this.employeeService.deleteEmployee(employee).subscribe();
  }

}
