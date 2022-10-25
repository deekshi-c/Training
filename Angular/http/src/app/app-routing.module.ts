import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PutComponent } from './put/put.component'; 
const routes: Routes = [ 
  {path:'', component: PutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=[
  PutComponent
];

