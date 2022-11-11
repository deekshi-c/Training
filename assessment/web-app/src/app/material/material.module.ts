import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
 import { MatDialogModule } from '@angular/material/dialog';
 import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';  
import { MatListModule } from '@angular/material/list'; 

const matArray = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  exports: [matArray],
  imports: [matArray],
})
export class MaterialModule {}
