import { Component, Input, OnInit } from '@angular/core';
import { barChartStaff, chartsAdditionalData } from '../financial-dashboard.type';
import { FinancialServicesService } from '../financial-services.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTotalStaffComponent } from '../dialog-total-staff/dialog-total-staff.component';
import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-total-staff',
  templateUrl: './total-staff.component.html',
  styleUrl: './total-staff.component.scss',
})
export class TotalStaffComponent implements OnInit {

  @Input() subHeading: string = '';

  constructor(
    private RequestService: FinancialServicesService, private dialog: MatDialog
  ) { }

  barChartStaff: barChartStaff[] = [];
  ngOnInit(): void {
    this.RequestService.getStaffNotAssignedTeam('staff_not_assigned_team').subscribe((data) => {
      this.barChartStaff = data;
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(DialogTotalStaffComponent, {
      width: '1200px',
      data: {
        title: 'Anne User', 
      }
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
      });
  }

 

  customTheme = {
    palette: {
      fills: ['#091836', '#03BCF3'],
      strokes: ['black'],
    },
  };

  series: unknown = [
    {
      type: 'bar',
      xKey: 'month',
      yKey: 'sr_ed',
      yName: 'SR&ED',
      fill: '#00bfff',
      stroke: '#0099cc',
      tooltip: {
        renderer: function ({ datum, yKey }: any) {
          return `
        <div class="ag-chart-tooltip-content">
            SR&ED: <b>${datum[yKey]} hrs</b> <br/> Unclaimed: <b>${datum.unclaimed} hrs</b>
        </div>`;
        },
      },
      cornerRadius: 4,
    },
    {
      type: 'bar',
      xKey: 'month',
      yKey: 'unclaimed',
      yName: 'unclaimed',
      fill: '#000033',
      stroke: '#000022',
      tooltip: {
        renderer: function ({ datum, yKey }: any) {
          return `
        <div class="ag-chart-tooltip-content">
            SR&ED: <b>${datum.sr_ed} hrs</b> <br/> Unclaimed: <b>${datum[yKey]} hrs</b>
        </div>`;
        },
      },
      cornerRadius: 4,
    },
  ];

  chartsAdditional: chartsAdditionalData = {
    shape: 'circle',
    axes_position: 'left',
    label_add_word: '',
    bg_fill: '#FBFBFB',
    axes_left_title: 'SR&ED Hours',
    axes_center_title: 'SR&ED Employees and Contractors',
    legend_position: 'right'
  }

}
