import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CongratsComponent } from './congrats/congrats.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ProgressScreenComponent } from './progress-screen/progress-screen.component';
import { TestGaurdGuard } from './test-guard.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'myCourse', component: MyCourseComponent, canActivate: [AuthGuard] },
  { path: 'overview', component: OverViewComponent, canActivate: [AuthGuard] },
  { path: 'test', component: TestComponent },
  { path: 'congrats', component: CongratsComponent },
  {
    path: 'testResult',
    component: ProgressScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
