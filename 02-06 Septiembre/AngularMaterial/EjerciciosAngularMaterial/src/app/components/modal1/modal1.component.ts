import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-modal1',
  standalone: true,
  imports: [MatDialogModule, MatLabel, MatInput, MatFormField,FormsModule,MatButton],
  templateUrl: './modal1.component.html',
  styleUrl: './modal1.component.scss'
})
export class Modal1Component {

  name: string = '';

  constructor(public dialogRef: MatDialogRef<Modal1Component>) {


  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAccept(): void {
    this.dialogRef.close(this.name);
  }

}
