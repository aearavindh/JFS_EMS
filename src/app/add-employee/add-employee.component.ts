import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee }        from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  title = 'Add Employee';
  employees: Employee[];
  id: number = 3;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }
  add(name: string, location: string, email: string, mobile: string): void {
  this.id = this.id + 1;
  var employee = new Employee(this.id, name, location, email, mobile);
  this.employeeService.addEmployee(employee)
    .subscribe(employee);
  this.router.navigate(["details"]);
}

}
