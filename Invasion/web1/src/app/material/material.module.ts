import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
 import { MatButtonModule } from '@angular/material/button'; 
 import {MatIconModule} from '@angular/material/icon';


const matArray=[
MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule,MatIconModule
]
@NgModule({
  exports:[matArray],
  imports:[matArray],
})
export class MaterialModule {}
