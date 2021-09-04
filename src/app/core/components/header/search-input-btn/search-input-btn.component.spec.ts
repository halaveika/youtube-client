import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchInputWithBtnComponent } from './search-input-btn.component';

describe('HeaderSearchInputWithBtnComponent', () => {
  let component: HeaderSearchInputWithBtnComponent;
  let fixture: ComponentFixture<HeaderSearchInputWithBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSearchInputWithBtnComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchInputWithBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
