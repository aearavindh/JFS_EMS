import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeesUrl = 'api/employees';
  employees: Employee[];

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

getEmployees (): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.employeesUrl);
}

getEmployee(id: number): Observable<Employee> {
  const url = `${this.employeesUrl}/${id}`;
  return this.http.get<Employee>(url);
}

addEmployee (employee: Employee): Observable<Employee> {
  return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions);
}
deleteEmployee(employee : Employee): Observable<Employee> {
  const url = `${this.employeesUrl}/${employee.id}`;
  return this.http.delete<Employee>(url);
}
update(employee: Employee): Observable<Employee> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions);
}

}
