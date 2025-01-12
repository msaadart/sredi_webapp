import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFinancialDashboardComponent } from './header-financial-dashboard.component';

describe('HeaderFinancialDashboardComponent', () => {
  let component: HeaderFinancialDashboardComponent;
  let fixture: ComponentFixture<HeaderFinancialDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderFinancialDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFinancialDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
