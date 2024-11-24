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
    <ng-content></ng-content>
      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>

    </button>

  `,
  styles: [
    `
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
    mat-icon {
      margin-left: 3px !important;
    }
    ::ng-deep {
      .mat-mdc-fab-base .mdc-button__label {
        width: auto !important;
      }
    }
    .custom-btn-black{
      color:var(--Neutral-800) !important;
      border:1px solid var(--Neutral-200);
      flex-direction: row-reverse;
      flex-direction: row-reverse;
      padding: 0 5px;
      border-radius: 10px;
    }
    `,
  ],
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' | string = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() icon: string | null = null;
  @Input() class: string | null = null;
  @Input() matBadge: string | null = null;



  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
