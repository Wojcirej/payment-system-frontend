import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginator-pages-selector',
  templateUrl: './pages-selector.component.html',
  styleUrls: ['./pages-selector.component.scss']
})
export class PagesSelectorComponent implements OnInit {
  @Input() data: any;
  @Input() endpoint: string;
  @Output() selectedPage = new EventEmitter();
  private pages: Array<number>;
  private currentPage: number;
  private previousPage: number;
  private nextPage: number;
  private pickedPage: number;

  constructor() {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.currentValue!= undefined) {
      this.pages = Array(changes.data.currentValue.totalPages).fill(0).map((x, i) => i + 1) || [1];
      this.currentPage = changes.data.currentValue.currentPage || 1;
      this.previousPage = changes.data.currentValue.prevPage || null;
      this.nextPage = changes.data.currentValue.nextPage || null;
      this.pickedPage = this.currentPage;
    }
  }

  pickPage(newPage) {
    this.pickedPage = newPage;
    this.selectedPage.emit(this.pickedPage);
  }
}
