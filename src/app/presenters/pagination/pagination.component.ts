import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() data: any;
  @Input() endpoint: string;
  @Output() page = new EventEmitter();
  @Output() perPage = new EventEmitter();
  private paginationData: any;
  private pickedPage: number;
  private itemsPerPage: number;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.paginationData = changes.data.currentValue;
  }

  setPage(page){
    this.pickedPage = page;
    this.changePage();
  }

  changePage() {
    this.page.emit(this.pickedPage);
  }

  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.changeItemsPerPage();
  }

  changeItemsPerPage() {
    this.perPage.emit(this.itemsPerPage);
  }
}
