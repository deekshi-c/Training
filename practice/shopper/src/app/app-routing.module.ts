import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';

const routes: Routes = [

  { path: '', component:HomeComponent },
  { path: 'signUp', component: SellerSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[
  NavBarComponent 
]