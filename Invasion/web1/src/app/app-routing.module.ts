import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import{ AdminComponent} from './admin/admin.component';
import { SupAdminComponent } from './sup-admin/sup-admin.component';
import { AcceptComponent } from './accept/accept.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent},
  {path: 'change', component: ChangePasswordComponent},
  {path:'home', component: HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'supAdmin',component:SupAdminComponent},
  {path:'accept',component:AcceptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[
  LoginComponent,ForgotComponent,
  ChangePasswordComponent,HomeComponent,
  AdminComponent,SupAdminComponent
]
