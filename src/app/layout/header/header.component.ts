import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  MobileLaptop = MobileLaptop;

  MobileOrLaptop = 0;
  @Output() toggleDrawer = new EventEmitter<void>();
  onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }

  searchControl = new FormControl();
  onSearchIconClick(): void {
    console.log(this.searchControl, 'Search icon clicked');
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
