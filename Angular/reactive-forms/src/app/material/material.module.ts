import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const matArray = [
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  exports: [matArray],
  imports: [matArray],
})
export class MaterialModule {}
