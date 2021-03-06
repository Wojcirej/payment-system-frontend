import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSelectorComponent } from './pages-selector.component';

describe('PaginatorComponent', () => {
  let component: PagesSelectorComponent;
  let fixture: ComponentFixture<PagesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
