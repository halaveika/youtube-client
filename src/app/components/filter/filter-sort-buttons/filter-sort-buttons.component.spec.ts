import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortButtonsComponent } from './filter-sort-buttons.component';

describe('FilterSortButtonsComponent', () => {
  let component: FilterSortButtonsComponent;
  let fixture: ComponentFixture<FilterSortButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSortButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSortButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
