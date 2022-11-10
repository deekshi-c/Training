import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavComponent } from './fav/fav.component';
import{ HomeComponent} from './home/home.component';
import { RecentComponent } from './recent/recent.component';
import { WHomeComponent } from './w-home/w-home.component';

const routes: Routes = [
  // {path:'',component:HomeComponent },
  {path:'',component:WHomeComponent},
  {path:'fav',component:FavComponent},
  {path:'recent',component:RecentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[
  HomeComponent,
  FavComponent,
  RecentComponent,WHomeComponent
]
