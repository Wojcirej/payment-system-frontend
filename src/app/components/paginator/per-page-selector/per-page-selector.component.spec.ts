import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerPageSelectorComponent } from './per-page-selector.component';

describe('PerPageSelectorComponent', () => {
  let component: PerPageSelectorComponent;
  let fixture: ComponentFixture<PerPageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerPageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerPageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
