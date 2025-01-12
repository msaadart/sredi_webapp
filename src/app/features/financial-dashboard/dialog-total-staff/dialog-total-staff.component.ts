import { Component, Inject, ViewChild } from '@angular/core';
import { DataSection, Projections, TProjectionType } from '../financial-dashboard.type';
import { FinancialServicesService } from '../financial-services.service';
import { SredProjectionsComponent } from '../sred-projections/sred-projections.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-total-staff',
  templateUrl: './dialog-total-staff.component.html',
  styleUrl: './dialog-total-staff.component.scss'
})
export class DialogTotalStaffComponent {
   @ViewChild(SredProjectionsComponent) childComponent: SredProjectionsComponent = new SredProjectionsComponent;
   
    constructor(
       private RequestService: FinancialServicesService,
       public dialogRef: MatDialogRef<DialogTotalStaffComponent>,
       @Inject(MAT_DIALOG_DATA) public data: { title: string; }
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
          this.selectiveProject = {...this.projections[TProjectionType.show_credits], tabs:false, show_projects:false}
          break;
        case TProjectionType.show_expenditures:
          this.selectiveProject = {...this.projections[TProjectionType.show_expenditures], tabs:false, show_projects:false}
          break;
        case TProjectionType.show_hours:
          this.selectiveProject = {...this.projections[TProjectionType.show_hours], tabs:false, show_projects:false}
          break;
      }
      this.childComponent.selectiveProject = this.selectiveProject;
    }

    close(): void {
      this.dialogRef.close();
    }
}
