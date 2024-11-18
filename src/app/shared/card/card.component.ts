import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="common-card">
      <mat-card>
        <mat-card-header>
          <div class="header">
            <h3>{{ title }}</h3>
            <button (click)="onClick()">
              <mat-icon>{{ icon }}</mat-icon>
            </button>
          </div>
        </mat-card-header>

        <mat-card-content>
          <ng-content></ng-content>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .common-card {
        margin: 15px;
        mat-card {
          margin: 15px 0;
          background-color: var(--white-background);
          box-shadow: none;
          mat-card-header {
            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width:100%;
              margin-bottom:10px;
              h3 {
                margin:0;
                font-size:var(font-size);
                color:var(--Neutral-800);
                font-weight:normal;
              }

              button {
                font-size: var(font-size);
                background-color: var(--white-background);
                border:0;
              }
            }
          }
        }
      }
    `,
  ],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() icon: string | null = null;

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
