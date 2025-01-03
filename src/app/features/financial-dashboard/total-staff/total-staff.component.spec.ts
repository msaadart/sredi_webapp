import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStaffComponent } from './total-staff.component';

describe('OverallHoursComponent', () => {
  let component: TotalStaffComponent;
  let fixture: ComponentFixture<TotalStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
