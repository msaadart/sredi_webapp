import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  @Output() toggleDrawer = new EventEmitter<void>();
  onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }

  searchControl = new FormControl();
  onSearchIconClick(): void {
    console.log(this.searchControl, 'Search icon clicked');
  }


}
