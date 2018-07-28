import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.scss']
})
export class SingleEmployeeComponent implements OnInit {
  public employee: Employee = new Employee();

  constructor(public apiService: ApiService, public acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe((response: any) =>{
      if (response && response.id) {
        this.apiService.get("employees/" + response.id).subscribe((response: any) => {
          this.employee = response.data;
        });
      }
      else {
        this.employee = new Employee();
      };
    });
  }
}
