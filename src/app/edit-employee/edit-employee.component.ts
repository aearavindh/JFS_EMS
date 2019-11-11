import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Employee }        from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  title = 'Edit Employee';
  locationList = ['Bangalore','Chennai','Pune','Hyderabad'];
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.employeeService.getEmployee(+params.get('id')))
      .subscribe(employee => {this.employee = employee;
                              this.locationList = this.locationList.filter(loc => loc !== this.employee.location);
      });
  }
  update(): void {
    this.employeeService.update(this.employee)
      .subscribe(employee => this.router.navigate(["employees"]));
  }

}
