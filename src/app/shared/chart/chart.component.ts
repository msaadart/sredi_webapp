import { Component, Input } from '@angular/core';
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: 'app-chart',
  template: `
    <div class="chart-wrapper">
    <!-- <ag-charts
      [options]="chartOptions">
    </ag-charts> -->
    </div>
  `,
  styles: [
    `
      .chart-wrapper {
        width: 100%;
        height: 100%;
        min-width: 400px;
        margin: 10px 0;
      }
    `,
  ],
})
export class ChartComponent {
  @Input() chartOptions: any = {};
}
