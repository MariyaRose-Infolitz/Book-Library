import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Component/book/book.component';
import { CompletedComponent } from './Component/completed/completed.component';
import { FavouriteComponent } from './Component/favourite/favourite.component';

const routes: Routes = [
  {path:'',redirectTo:'books',pathMatch:'full'},
  {path:'books',component:BookComponent},
  {path:'favourites',component:FavouriteComponent},
  {path:'completed',component:CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
