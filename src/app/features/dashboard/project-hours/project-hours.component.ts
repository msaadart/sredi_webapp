import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-hours',
  templateUrl: './project-hours.component.html',
  styleUrl: './project-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHoursComponent {
  customTheme = {
    palette: {
      fills: ['#091836', '#03BCF3'],
      strokes: ['black'],
    },
  };

  // column charts
  barChart: columnChart[] = [
    { name: 'Apple', hours: 250, color: '#00bfff' },
    { name: 'Walmart', hours: 580, color: '#ff8000' },
    { name: 'Microsoft', hours: 100, color: '#a83232' },
    { name: 'Project 01', hours: 200, color: '#8a2be2' },
    { name: 'Project 02', hours: 450, color: '#6a5acd' },
    { name: 'Project 03', hours: 500, color: '#9400d3' },
    { name: 'Project 04', hours: 180, color: '#3cb371' },
    { name: 'Project 05', hours: 400, color: '#db7093' },
    { name: 'Project 06', hours: 300, color: '#2f4f4f' },
    { name: 'Project 07', hours: 50, color: '#7fff00' },
  ];

  series: unknown = [
    {
      type: 'bar',
      xKey: 'name',
      yKey: 'hours',
      yName: 'Total Hours',
      fill: (params: any) => params.datum.color,
      stroke: '#0099cc',
      tooltip: {
        renderer: function ({ datum, yKey }: any) {
          return `
        <div class="ag-chart-tooltip-content">
            Total Hours: <b>${datum.hours}</b>
        </div>`;
        },
      },
      legend: {
        enabled: false,
      },
      cornerRadius: 4,
    },
  ];
}

export type columnChart = {
  name: string;
  hours: number;
  color: string;
};
