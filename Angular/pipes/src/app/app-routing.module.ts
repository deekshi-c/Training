import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltinComponent } from './builtin/builtin.component';
import { CustomComponent } from './custom/custom.component';
import { ParamComponent } from './param/param.component';

const routes: Routes = [
  {path: 'builtin', component:BuiltinComponent},
  {path: 'param', component:ParamComponent},
  {path: 'custom', component:CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=[
  BuiltinComponent,
  ParamComponent,
  CustomComponent
];
