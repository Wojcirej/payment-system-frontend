import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public rows: Array<Employee>;

  constructor(public apiService: ApiService, public router: Router) {
  }

  ngOnInit() {
    this.apiService.get("employees").subscribe((response: any) =>{
      this.rows = response.data;
    });
  }

}
