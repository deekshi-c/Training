import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';

const materialComponent = [
  MatSlideToggleModule,
  MatInputModule,
  MatProgressBarModule,
  MatIconModule,
  MatDialogModule,
  MatBadgeModule,
  DragDropModule,
];

@NgModule({
  exports: [materialComponent],
  imports: [materialComponent],
})
export class MaterialModule {}
