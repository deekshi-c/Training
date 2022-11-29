import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {
    path:'', redirectTo: 'photos',pathMatch:'full'
  },
  { path:'photos', component:PhotosComponent },
  {
    path:'videos', component:VideosComponent},
  { path:'fav',component:FavouritesComponent},
  {
    path:'detail', component:DetailComponent

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routing =[
  PhotosComponent,
  VideosComponent,
  FavouritesComponent
]
