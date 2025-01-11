import { Component, OnInit  } from '@angular/core';
import { ScreenSizeService } from '../../shared/utilities/screen-size.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(public screenSizeService: ScreenSizeService) {}

  screenSize: string = '';

  ngOnInit(): void {
    this.screenSize = this.screenSizeService.getCurrentScreenSize();
  }
}
