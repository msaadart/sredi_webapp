import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SredProjectionsComponent } from './sred-projections.component';

describe('SredProjectionsComponent', () => {
  let component: SredProjectionsComponent;
  let fixture: ComponentFixture<SredProjectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SredProjectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SredProjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
