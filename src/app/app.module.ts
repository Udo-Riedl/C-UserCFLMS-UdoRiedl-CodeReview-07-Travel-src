import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { HeroComponent } from './hero/hero.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelsDetailsComponent } from './travels-details/travels-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BlogPageComponent,
    TravelsPageComponent,
    HeroComponent,
    TravelsListComponent,
    TravelsDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
