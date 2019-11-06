import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  count: number;
  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit() {
  this.getEmployees();
  } 
  getEmployees(): void{
  this.employeeService.getEmployees()
    .subscribe(employees => {this.employees = employees;
                             this.count = employees.length;
                            });
  }
  delete(employee: Employee): void {
  this.employees = this.employees.filter(emp => emp !== employee);
  this.employeeService.deleteEmployee(employee).subscribe();
  this.count = this.count - 1;
  }
  edit(employee: Employee): void{
  this.router.navigate(['/editEmployee', employee.id]);
  }

}
