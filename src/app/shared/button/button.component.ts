import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      mat-button
      [color]="color"
      [disabled]="disabled"
      [type]="type"
      [class]="class"
      (click)="onClick()"
      [matBadge]="matBadge"
    >
      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      font-size: 16px;
      text-transform: uppercase;
      border-radius: 5px;
    }

    mat-icon {
      margin-right: 8px;
    }
    ::ng-deep {
      .mat-mdc-fab-base .mdc-button__label {
        width: auto !important;
      }
    }
    `,
  ],
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() icon: string | null = null;
  @Input() class: string = '';
  @Input() matBadge: string | null = null;

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
