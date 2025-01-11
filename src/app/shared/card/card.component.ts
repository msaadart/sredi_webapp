import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="common-card">
      <mat-card>
        <mat-card-header>
          <div class="header">
            <h3>
              @if(titleIcon){
                <mat-icon>{{titleIcon}}</mat-icon>  
              } 
              {{ title }}</h3>
            <div class="button-icon">
              <button mat-flat-button *ngIf="flatButton">{{flatButton}}</button>
              <button mat-flat-button *ngIf="view" class="view-button button">{{view}}</button>
              <button (click)="onClick()" class="button">
                <mat-icon>{{ icon }}</mat-icon>
              </button>
            </div>
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
                display:flex;
                mat-icon{
                  padding-right:5px;
                }
              }

              .button {
                font-size: var(font-size);
                background-color: var(--white-background);
                border:0;
              }
              .button-icon{
                display:inline-flex;
              }
              .view-button{
                background: none;
                border: none;
                font-weight: bold;
                color: var(--Neutral-900);
                cursor: pointer;
                text-decoration: underline;
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
  @Input() view: string | null = null;
  @Input() titleIcon: string | null = null;
  @Input() flatButton: string | null = null;

  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
