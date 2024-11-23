import { Component, Input, OnInit } from '@angular/core';
import { AgChartTheme } from 'ag-charts-community';

@Component({
  selector: 'app-bar-chart',
  template: `
     <ag-charts [options]="options" class="donut"></ag-charts>
  `,
  styles: [
    `
    .donut{
      width:100%; display: block
    }
    `,
  ],
})
export class BarChartComponent {
  @Input() data: unknown = [];
  @Input() theme: AgChartTheme = {};
  @Input() series: unknown = [];

  options: any = {};

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    this.options = {
      data: this.data,
      theme: this.theme,
      autoSize: true,
      series: this.series,
      legend: {
        enabled: true,
        item:{
          marker: {
            shape: "circle",
          }
        }
      },
      background: {
        fill: '#FBFBFB',
      },
    };
  }
}
