import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeesUrl = 'api/employees';
  employees: Employee[];

getEmployees (): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.employeesUrl);
}

getEmployee(id: number): Observable<Employee> {
  const url = `${this.employeesUrl}/${id}`;
  return this.http.get<Employee>(url);
}
deleteEmployee(employee : Employee): Observable<Employee> {
  const url = `${this.employeesUrl}/${employee.id}`;
  return this.http.delete<Employee>(url);
}

}
