import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'

const materialModule= [
  MatButtonModule,
];

@NgModule({
  imports: [materialModule],
  exports: [materialModule],
})
export class MaterialModule {}
