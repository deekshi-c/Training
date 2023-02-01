import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

const material = [
  CommonModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
