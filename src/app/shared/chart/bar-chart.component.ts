import { Component, Input } from '@angular/core';
import {
  AgChartTheme,
  AgCategoryAxisOptions,
  AgNumberAxisOptions,
} from 'ag-charts-community';

@Component({
  selector: 'app-bar-chart',
  template: ` <ag-charts [options]="options" class="bar"></ag-charts> `,
  styles: [
    `
      .bar{
        width: 100%;
        display: block;
      }
    `,
  ],
})
export class BarChartComponent {
  @Input() data: unknown = [];
  @Input() theme: AgChartTheme = {};
  @Input() series: unknown = [];
  @Input() legend?: boolean;
  @Input() chartsAdditional!:chartsAdditionalData;

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
        enabled: this.legend,
        item: {
          marker: {
            shape: this.chartsAdditional.shape,
          },
        },
        position:this.chartsAdditional.legend_position
      },
      tooltip: {
        class: 'my-tooltip',
      },
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: this.chartsAdditional.axes_center_title
          && { text: this.chartsAdditional.axes_center_title }
        } as AgCategoryAxisOptions,
        {
          type: 'number',
          position: this.chartsAdditional.axes_position,
          label: {
            formatter: (params) => {
              return params.value + this.chartsAdditional.label_add_word;
            },
          },
          title: this.chartsAdditional.axes_left_title
          && { text: this.chartsAdditional.axes_left_title }
        } as AgNumberAxisOptions,
      ],
      background: {
        fill: this.chartsAdditional.bg_fill,
      },
    };
  }
}

export type chartsAdditionalData = {
  shape: Shape;
  axes_position: string;
  label_add_word: string;
  bg_fill:string;
  axes_left_title?:string;
  axes_center_title?:string;
  legend_position?:string;
};

type Shape = 'circle' | 'square' | 'cross' | 'plus' | 'triangle';
