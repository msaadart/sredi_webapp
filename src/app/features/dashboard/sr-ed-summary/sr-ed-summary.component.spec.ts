import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrEdSummaryComponent } from './sr-ed-summary.component';

describe('SrEdSummaryComponent', () => {
  let component: SrEdSummaryComponent;
  let fixture: ComponentFixture<SrEdSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrEdSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrEdSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
