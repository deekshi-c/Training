import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
const MaterialComponent = [
  MatInputModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule
];
@NgModule({
  exports: [MaterialComponent],
  imports: [MaterialComponent],
})
export class MaterialModule {}
