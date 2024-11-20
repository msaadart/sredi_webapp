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
  list= [
    { name: "Total Tracked Hours", hours:0.3300, month: 3 },
    { name: "Total Worked Hours", hours: 0.6695, month: 3 },
  ];
  total = this.list.reduce((sum, d) => sum + d["hours"], 0);
  numFormatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 0,
  });
  public options: any = {
    theme: myTheme,
    data:this.list,

    series: [
      {
        type: "donut",
        //calloutLabelKey: "type",
        angleKey: "hours",
        sectorLabelKey: "hours",
        calloutLabel: {
          enabled: false,
        },
        legendItemKey: "name",
        // sectorLabel: {
        //   formatter: ({ data, sectorLabelKey }) => {
        //     return this.numFormatter.format(datum[sectorLabelKey]);
        //   },
        // },
        // title: {
        //   text: "Annual Count",
        // },
        calloutLabelKey: "type",
        innerRadiusRatio: 0.7,
        innerLabels: [
          {
            text: this.numFormatter.format(this.total),
            fontSize: 24,
          },
          {
            text: "Total",
            fontSize: 16,
            spacing: 10,
          },
        ],
        // tooltip: {
        //   renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
        //     return {
        //       title,
        //       content: `${datum[calloutLabelKey]}: ${numFormatter.format(datum[sectorLabelKey])}`,
        //     };
        //   },
        // },
        sectorSpacing: 3,
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
