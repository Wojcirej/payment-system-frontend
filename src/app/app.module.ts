import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ApiService } from './services/api/api.service';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { SingleEmployeeComponent } from './components/employees/single-employee/single-employee.component';
import { PagesSelectorComponent } from './components/paginator/pages-selector/pages-selector.component';
import { PerPageSelectorComponent } from './components/paginator/per-page-selector/per-page-selector.component';

import { TopNavigationBar } from './presenters/top-navigation-bar/top-navigation-bar';
import { PaginationComponent } from './presenters/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SingleEmployeeComponent,
    TopNavigationBar,
    PagesSelectorComponent,
    PerPageSelectorComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'employees',
          component: EmployeeListComponent
        },
        {
          path: 'employees/:id',
          component: SingleEmployeeComponent
        },
      ]
    )
  ],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
