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
  locationList = ['Bangalore','Chennai','Pune','Hyderabad'];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }
  add(name: string, location: string, email: string, mobile: string): void {
  var employee = new Employee(name, location, email, mobile);
  this.employeeService.addEmployee(employee)
    .subscribe(employee => {
      this.router.navigate(["employees"]);
      });
}

}
