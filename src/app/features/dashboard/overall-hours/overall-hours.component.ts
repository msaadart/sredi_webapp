import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgChartTheme } from 'ag-charts-community';

var myTheme: AgChartTheme = {
  palette: {
    fills: ['#03BCF3', '#091836'],
    strokes: ['black'],
  },

};

@Component({
  selector: 'app-overall-hours',
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallHoursComponent {
  public options: any = {
    theme: myTheme,
    data: [
      { asset: 'Total Worked Hours', amount: 600 },
      { asset: 'Total Tracked Hours', amount: 400 },
    ],
    series: [
      {
        type: 'donut',
        angleKey: 'amount',
        innerRadiusRatio: 0.7,
        yName: 'asset',
        innerLabels: [
          {
            text: 'Total Hours',
            fontWeight: 'bold',
          },
          {
            text: '1,000',
            spacing: 1,
            fontSize: 20,
            color: '#091836',
          },
        ],
        innerCircle: {
          fill: '#FBFBFB',
        },
      },
    ],
    background: {
      fill: '#FBFBFB',
    },
  };

  public options2: any = {
    theme: myTheme,
    autoSize:true,
    data: [
      { month: 'January', worked: 120, tracked: 100 },
      { month: 'January', worked: 110, tracked: 95 },
      { month: 'March', worked: 130, tracked: 110},
      { month: 'April', worked: 100, tracked: 90 },
      { month: 'May', worked: 115, tracked: 100 },

    ],

    series: [
      { type: 'bar', xKey: 'month', yKey: 'worked', yName: 'Cumulative Hours' },
      { type: 'bar', xKey: 'month', yKey: 'worked', yName: 'Total Hours' },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: { text: 'Month' },
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'Hours' },
      },
    ],
    title: {
      text: 'Monthly Hours Summary',
    },
    legend: {
      position: 'bottom',
    },
    background: {
      fill: '#FBFBFB',
    },
  };
}
