import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSalaryComponent } from './staff-salary.component';

describe('StaffSalaryComponent', () => {
  let component: StaffSalaryComponent;
  let fixture: ComponentFixture<StaffSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
