import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
   <mat-dialog-content>
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <p>{{ data.message }}</p>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button (click)="close()">Close</button>
    <button mat-raised-button color="primary" (click)="dialogRef.close('confirmed')">Confirm</button>
  </mat-dialog-actions>
  `,
  styles: `
  mat-dialog-content {
  font-size: 16px;
    margin-bottom: 16px;
  }

  mat-dialog-actions {
    margin-top: 16px;
  }
  `
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; }
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
