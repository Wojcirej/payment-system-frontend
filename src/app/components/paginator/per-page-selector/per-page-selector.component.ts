import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginator-per-page-selector',
  templateUrl: './per-page-selector.component.html',
  styleUrls: ['./per-page-selector.component.scss']
})
export class PerPageSelectorComponent {
  private options: Array<number>;
  private selectedOption: number;
  @Output() itemsPerPage = new EventEmitter();

  constructor() {}
  ngOnInit() {
    this.options = [5, 10, 25, 50, 100];
    this.selectedOption = 25;
  }

  changeItemsPerPage(newValue) {
    this.itemsPerPage.emit(this.selectedOption);
  }
}
