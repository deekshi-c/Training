import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
 import { MatDialogModule } from '@angular/material/dialog';


const matArray = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule
];

@NgModule({
  exports: [matArray],
  imports: [matArray],
})
export class MaterialModule {}
