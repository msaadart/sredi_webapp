import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-material-input',
  template: `
    <mat-form-field [appearance]="appearance" class="material-input">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [formControl]="control"
        [placeholder]="placeholder"
        [type]="type"
        [required]="required"
      />
      <button mat-icon-button *ngIf="icon" matSuffix (click)="onIconClick()">
        <mat-icon>{{ icon }}</mat-icon>
      </button>
      <mat-error *ngIf="control?.invalid && control?.touched">
        {{ errorMessage }}
      </mat-error>
    </mat-form-field>
  `,
  styles: [
    `
    .mdc-icon-button{margin-right:10px;}
    mat-form-field.material-input{
    --mat-form-field-container-height: 40px;
    --mat-form-field-container-vertical-padding: 8px;
    }
    `,
  ],
})
export class MaterialInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() errorMessage: string = 'This field is required';
  @Input() icon?: string;
  @Output() iconClick = new EventEmitter<void>();

  onIconClick(): void {
    this.iconClick.emit();
  }
}
