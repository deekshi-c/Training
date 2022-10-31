import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
 import { MatButtonModule } from '@angular/material/button'; 
 import {MatIconModule} from '@angular/material/icon';
 import { MatDatepickerModule } from '@angular/material/datepicker';
 import{ MatNativeDateModule} from '@angular/material/core';
 import { NativeDateModule } from '@angular/material/core';
 import {MatRippleModule} from '@angular/material/core';



const matArray = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  NativeDateModule,
  MatRippleModule
];
@NgModule({
  exports:[matArray],
  imports:[matArray],
})
export class MaterialModule {}
