// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Components
import { UsersComponent } from './pages/users/users.component';
import { IndexComponent } from './pages/index/index.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PicturesComponent } from './pages/pictures/pictures.component';


const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'users', component:UsersComponent},
  {path: 'albums', component:AlbumsComponent},
  {path: 'pictures', component:PicturesComponent},
  // {path: 'error', loadChildren: () => import('./views/pages/error/error.module').then(m => m.ErrorModule)},
  
  {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
