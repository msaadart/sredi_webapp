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

import { MaterialInputComponent } from './material-input/material-input.component';
import { ButtonComponent } from './button/button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CardComponent } from './card/card.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    MaterialInputComponent,
    ButtonComponent,
    DatePickerComponent,
    CardComponent,
    ChartComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
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
    ReactiveFormsModule,
    MatButtonModule
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
    ButtonComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }