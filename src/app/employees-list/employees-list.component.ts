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
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  } 

}
