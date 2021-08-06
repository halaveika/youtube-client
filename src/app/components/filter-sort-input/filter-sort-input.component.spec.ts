import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortInputComponent } from './filter-sort-input.component';

describe('FilterSortInputComponent', () => {
  let component: FilterSortInputComponent;
  let fixture: ComponentFixture<FilterSortInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSortInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSortInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
