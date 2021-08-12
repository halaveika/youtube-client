import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSettingsBtnComponent } from './header-settings-btn.component';

describe('HeaderSettingsBtnComponent', () => {
  let component: HeaderSettingsBtnComponent;
  let fixture: ComponentFixture<HeaderSettingsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSettingsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSettingsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
