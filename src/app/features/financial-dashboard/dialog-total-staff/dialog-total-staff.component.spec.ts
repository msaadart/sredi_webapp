import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTotalStaffComponent } from './dialog-total-staff.component';

describe('DialogTotalStaffComponent', () => {
  let component: DialogTotalStaffComponent;
  let fixture: ComponentFixture<DialogTotalStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTotalStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTotalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
