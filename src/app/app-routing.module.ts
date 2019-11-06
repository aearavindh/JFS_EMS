import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'employees',
    component:EmployeesListComponent
  },
  {
    path:'addEmployee',
    component:AddEmployeeComponent
  },
  {
    path:'editEmployee/:id',
    component:EditEmployeeComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
