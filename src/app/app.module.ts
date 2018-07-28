import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './services/api/api.service';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { SingleEmployeeComponent } from './components/employees/single-employee/single-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SingleEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'employees',
          component: EmployeeListComponent
        },
        {
          path: 'employees/:id',
          component: SingleEmployeeComponent
        }
      ]
    )
  ],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
