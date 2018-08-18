import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { Employee } from '../../../models/employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public rows: Array<Employee>;
  private subscription: Subscription;

  constructor(public apiService: ApiService, public router: Router) {
  }

  ngOnInit() {
    this.subscription = this.apiService.get("employees").subscribe((response: any) =>{
      this.rows = response.data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
