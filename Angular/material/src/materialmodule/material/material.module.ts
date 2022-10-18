import { NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import{ MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';

const matArray = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  exports: [matArray],
  imports: [matArray],
})
export class MaterialModule {}
