import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FavouriteComponent } from './Component/favourite/favourite.component';
import { CompletedComponent } from './Component/completed/completed.component';
import { BookComponent } from './Component/book/book.component';
import {HttpClientModule} from '@angular/common/http'
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavouriteComponent,
    CompletedComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
