import { Component } from '@angular/core';

@Component({
  selector: 'app-overall-hours',
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss',
})
export class OverallHoursComponent {

  customTheme = {
    palette: {
      fills: ['#091836', '#03BCF3'],
      strokes: ['black'],
    },
  };

  // dount charts
  chartData: chartDount[] = [
    {
      name: 'Total Tracked Hours',
      hours: 400,
      percentage: '40%',
      name_hours: 'Total Tracked Hours 400hrs',
    },
    {
      name: 'Total Worked Hours',
      hours: 600,
      percentage: '60%',
      name_hours: 'Total Tracked Hours 600hrs',
    },
  ];

  dountSeries:unknown = [
    {
      type: 'donut',
      labelKey: 'name',
      angleKey: 'hours',
      sectorLabelKey: 'percentage',
      innerRadiusRatio: 0.6,
      itemStyler: {
        cornerRadius: 20,
      },
      calloutLabel: {
        enabled: false,
      },
      legendItemKey: 'name_hours',
      innerLabels: [
        {
          text: 'Total Hours',
          fontSize: 15,
          spacing: 10,
        },
        {
          text: '1000',
          fontSize: 24,
        },
      ],
      tooltip: {
        enabled: false,
      },
    },
  ]

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
}

export type barChart = {
  month: string;
  cumulative: number;
  total: number;
};

export type chartDount = {
  name: string;
  hours: number;
  percentage: string;
  name_hours: string;
};
