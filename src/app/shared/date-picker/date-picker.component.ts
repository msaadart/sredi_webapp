import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  template: `
  <!-- Date Range Picker -->
  <label *ngIf="label && isRange" class="mat-label">{{label}}</label>
  <mat-form-field *ngIf="isRange" appearance="outline" class="material-input">
    <mat-date-range-input [rangePicker]="rangePicker">
      <input matStartDate [placeholder]="startPlaceholder" />
      <input matEndDate [placeholder]="endPlaceholder" />
    </mat-date-range-input>
    <mat-hint>{{ dateRangeHint }}</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="rangePicker"></mat-datepicker-toggle>
    <mat-date-range-picker #rangePicker></mat-date-range-picker>
  </mat-form-field>

  <!-- Single Date Picker -->
  <label *ngIf="label && !isRange">{{label}}</label>
  <mat-form-field *ngIf="!isRange" appearance="outline" class="material-input">
    <input matInput [matDatepicker]="singlePicker" [placeholder]="singleDatePlaceholder" />
    <mat-hint>{{ singleDateHint }}</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="singlePicker"></mat-datepicker-toggle>
    <mat-datepicker #singlePicker></mat-datepicker>
  </mat-form-field>
`,
styles: [
  `
   .mat-datepicker-toggle{margin-right:10px !important;}
    mat-form-field.material-input{
    --mat-form-field-container-height: 50px;
    --mat-form-field-container-vertical-padding: 8px;
    }
    mat-date-range-input#mat-date-range-input-0{
      padding-top:11px;
    }
    .mat-label{
      color:var(--Neutral-800);
      font-Size:var(--font-size-small);
      position: absolute;
      margin: -1px 0 0 16px;
    }
  `
]
})
export class DatePickerComponent {
  @Input() isRange: boolean = true;
  @Input() label:string | null = null;
  @Input() startPlaceholder: string = 'Start date';
  @Input() endPlaceholder: string = 'End date';
  @Input() singleDatePlaceholder: string = 'Select a date';
  @Input() dateRangeHint: string | null = null;
  @Input() singleDateHint: string | null = null;
}
