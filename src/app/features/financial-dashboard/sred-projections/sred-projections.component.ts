import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataSection } from '../financial-dashboard.type';

@Component({
  selector: 'app-sred-projections',
  templateUrl: './sred-projections.component.html',
  styleUrl: './sred-projections.component.scss'
})
export class SredProjectionsComponent implements OnInit {

selectiveProject!:DataSection;

ngOnInit(): void {
}


}
