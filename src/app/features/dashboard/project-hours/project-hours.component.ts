import { ChangeDetectionStrategy, Component } from '@angular/core';
import { chartsAdditionalData, columnChart } from '../dashboard-service.type';

@Component({
  selector: 'app-project-hours',
  templateUrl: './project-hours.component.html',
  styleUrl: './project-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHoursComponent {
  customTheme = {
    palette: {
      fills: [
        '#00bfff','#ff8000',
      ],
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
      itemStyler: ({ datum }:any) => {
        return {
          fill: datum.color,
        };
      },
      stroke: '#000000',
      tooltip: {
        renderer: function ({ datum }: any) {
          return `
        <div class="ag-chart-tooltip-content">
            Total Hours: <b>${datum.hours} hrs</b>
        </div>`;
        },
      },
      cornerRadius: 4,
    },
  ];
  chartsAdditional:chartsAdditionalData = {
    shape: 'circle',
    axes_position:'left',
    label_add_word: ' hrs',
    bg_fill:'#FBFBFB',
  }
}


