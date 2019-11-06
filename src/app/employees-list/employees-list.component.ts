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
  employees: Employee[];
  filteredEmployees: Employee[];
  _filterby: string;
  count: number;
  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit() {
  this.getEmployees();
  } 
  get filterby(): string {
    return this._filterby;
  }
  set filterby(value: string) {
    this._filterby = value;
    this.filteredEmployees = this._filterby ? this.filter(this._filterby) : this.employees;
  }
  getEmployees(): void{
  this.employeeService.getEmployees()
    .subscribe(employees => {this.employees = employees;
                             this.filteredEmployees = employees;
                             this.count = employees.length;
                             this._filterby = "";
                            });
  }
  filter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: Employee) => employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  delete(employee: Employee): void {
  this.filteredEmployees = this.filteredEmployees.filter(emp => emp !== employee);
  this.employeeService.deleteEmployee(employee).subscribe();
  this.count = this.count - 1;
  this.getEmployees();
  }
  edit(employee: Employee): void{
  this.router.navigate(['/editEmployee', employee.id]);
  }

}
