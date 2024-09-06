import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Modal1Component } from '../modal1/modal1.component'
import { MatDialog } from '@angular/material/dialog';
import dialogRef from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-fab',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    Modal1Component,
    CommonModule
  ],
  templateUrl: './button-fab.component.html',
  styleUrl: './button-fab.component.scss'
})
export class ButtonFABComponent {

  name: string | null = null;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(Modal1Component, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.name = result;
      }
    });
  }
}
