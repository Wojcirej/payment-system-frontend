import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public paginationData: any;
  private subscription; pageSubscription; perPageSubscription: Subscription;
  private page: number;
  private itemsPerPage: number;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.subscription = this.apiService.get("employees?page=" + this.page + "&per_page=" + this.itemsPerPage).subscribe((response: any) =>{
      this.rows = response.data;
      this.paginationData = response.meta;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setPage(page) {
    this.page = page;
    console.log("Page from EmployeeListComponent: " + this.page);
    this.fetchList();
  }

  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    console.log("Items per page from EmployeeListComponent: " + this.itemsPerPage);
    this.fetchList();
  }
}
