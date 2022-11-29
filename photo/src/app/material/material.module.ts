import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 

const MaterialComponent=[
MatIconModule
]

@NgModule({
  exports: [MaterialComponent],
  imports: [MaterialComponent],
})
export class MaterialModule {}
