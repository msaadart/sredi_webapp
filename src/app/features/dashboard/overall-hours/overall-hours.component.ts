import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-overall-hours',
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallHoursComponent {
  public options = {
    data: [
      { label: 'Total Worked Hours', value: 600 },
      { label: 'Total Tracked Hours', value: 400 }
    ],
    series: [{
      type: 'pie',
      angleKey: 'value',
      labelKey: 'label',
      innerRadiusOffset: -70,
    }],
  };
}
