import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MaterialInputComponent } from './material-input/material-input.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { AgCharts } from 'ag-charts-angular';
import { AgGridAngular } from "ag-grid-angular";


import { ButtonComponent } from './button/button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { DonutChartComponent } from './chart/donut-chart.component';
import { BarChartComponent } from './chart/bar-chart.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    MaterialInputComponent,
    ButtonComponent,
    DatePickerComponent,
    CardComponent,
    TableComponent,
    DonutChartComponent,
    BarChartComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSidenav,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonToggleModule, 
    MatCheckboxModule,
    MatBadgeModule,
    MatDialogModule,
    AgCharts,
    AgGridAngular
  ],
  exports:[
    MatSidenavModule,
    MatSidenav,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MaterialInputComponent,
    MatDividerModule,
    ButtonComponent,
    DatePickerComponent,
    CardComponent,
    TableComponent,
    MatTabsModule,
    MatSelectModule,
    DonutChartComponent,
    BarChartComponent,
    MatButtonToggleModule, 
    MatCheckboxModule,
    MatBadgeModule,
    MatDialogModule,
    DialogComponent,
  ]
})
export class SharedModule { }
