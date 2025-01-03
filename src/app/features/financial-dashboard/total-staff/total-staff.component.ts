import { Component } from '@angular/core';
import { barChart, chartsAdditionalData } from '../financial-dashboard.type';

@Component({
  selector: 'app-total-staff',
  templateUrl: './total-staff.component.html',
  styleUrl: './total-staff.component.scss',
})
export class TotalStaffComponent {

  customTheme = {
    palette: {
      fills: ['#091836', '#03BCF3'],
      strokes: ['black'],
    },
  };


  // bar charts
  barChart: barChart[] = [
    { month: 'Jan', cumulative: 500, total: 50 },
    { month: 'Feb', cumulative: 500, total: 200 },
    { month: 'Mar', cumulative: 1000, total: 70 },
    { month: 'Apr', cumulative: 700, total: 250 },
    { month: 'May', cumulative: 500, total: 170 },
    { month: 'Jun', cumulative: 100, total: 30 },
    { month: 'Jul', cumulative: 100, total: 50 },
    { month: 'Aug', cumulative: 500, total: 40 },
    { month: 'Sep', cumulative: 100, total: 400 },
  ];

  series: unknown = [
    {
      type: 'bar',
      xKey: 'month',
      yKey: 'cumulative',
      yName: 'Cumulative Hours',
      fill: '#00bfff',
      stroke: '#0099cc',
      tooltip: {
        renderer: function ({ datum, yKey }: any) {
          return `
        <div class="ag-chart-tooltip-content">
            Cumulative Hours: <b>${datum[yKey]} hrs</b> <br/> Total Hours: <b>${datum.total} hrs</b>
        </div>`;
        },
      },
      cornerRadius: 4,
    },
    {
      type: 'bar',
      xKey: 'month',
      yKey: 'total',
      yName: 'Total Hours',
      fill: '#000033',
      stroke: '#000022',
      tooltip: {
        renderer: function ({ datum, yKey }: any) {
          return `
        <div class="ag-chart-tooltip-content">
            Cumulative Hours: <b>${datum.cumulative} hrs</b> <br/> Total Hours: <b>${datum[yKey]} hrs</b>
        </div>`;
        },
      },
      cornerRadius: 4,
    },
  ];
  chartsAdditional:chartsAdditionalData = {
    shape:'circle',
    axes_position:'left',
    label_add_word: ' hrs',
    bg_fill:'#FBFBFB',
  } 
}
