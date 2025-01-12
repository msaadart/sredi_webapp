import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-financial-dashboard',
  templateUrl: './header-financial-dashboard.component.html',
  styleUrl: './header-financial-dashboard.component.scss'
})
export class HeaderFinancialDashboardComponent {
 MobileLaptop = MobileLaptop;

  MobileOrLaptop = 0;
  @Output() toggleDrawer = new EventEmitter<void>();
  onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }


  dateRange: boolean = true;
  searchBar: boolean = true;
  toggleVisibility(key: string): void {
    switch (key) {
      case 'dateRange':
        this.dateRange = !this.dateRange;
        this.searchBar = true;
        break;
      case 'searchBar':
        this.searchBar = !this.searchBar;
        this.dateRange = true;
        break;
    }
  }
}

export enum MobileLaptop {
  mobile,
  laptop,
}
