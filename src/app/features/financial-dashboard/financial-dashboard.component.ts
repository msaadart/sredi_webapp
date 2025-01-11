import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FinancialServicesService } from './financial-services.service';
import { DataSection, Projections, TProjectionType } from './financial-dashboard.type';
import { SredProjectionsComponent } from './sred-projections/sred-projections.component';

@Component({
  selector: 'app-financial-dashboard',
  templateUrl: './financial-dashboard.component.html',
  styleUrl: './financial-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialDashboardComponent implements OnInit{

  @ViewChild(SredProjectionsComponent) childComponent: SredProjectionsComponent = new SredProjectionsComponent;

  constructor(
     private RequestService: FinancialServicesService,
  ){}


  projections!:Projections;
  selectiveProject!:DataSection;

  ngOnInit(): void {
    this.RequestService.getProjections('quater_Payment').subscribe((data) => {
      this.projections = data;
      this.selectiveData(TProjectionType.show_hours);
    });
  }


  selectedDefualtValue:string = TProjectionType.show_hours;
  selectiveData(value:string) {
    switch (value) {
      case TProjectionType.show_credits:
        this.selectiveProject = this.projections[TProjectionType.show_credits]
        break;
      case TProjectionType.show_expenditures:
        this.selectiveProject = this.projections[TProjectionType.show_expenditures]
        break;
      case TProjectionType.show_hours:
        this.selectiveProject = this.projections[TProjectionType.show_hours]
        break;
    }
    this.childComponent.selectiveProject = this.selectiveProject;
  }
}
