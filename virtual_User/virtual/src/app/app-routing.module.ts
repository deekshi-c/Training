import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratsComponent } from './congrats/congrats.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ProgressScreenComponent } from './progress-screen/progress-screen.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'myCourse', component: MyCourseComponent },
  { path: 'overview', component:OverViewComponent },
  { path: 'test',component:TestComponent},
  { path: 'congrats',component:CongratsComponent},
  { path: 'testResult',component:ProgressScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
