import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { Employee } from '../../../models/employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.scss']
})
export class SingleEmployeeComponent implements OnInit, OnDestroy {
  public employee: Employee = new Employee();
  private idSubscription: Subscription;
  private employeeSubscription: Subscription;

  constructor(public apiService: ApiService, public acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idSubscription = this.acRoute.params.subscribe((response: any) =>{
      if (response && response.id) {
        this. employeeSubscription = this.apiService.get("employees/" + response.id).subscribe((response: any) => {
          this.employee = response.data;
        });
      }
      else {
        this.employee = new Employee();
      };
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.employeeSubscription.unsubscribe();
  }
}
