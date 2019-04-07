import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantMenuDescriptionComponent } from './restaurant-menu-description/restaurant-menu-description.component';

import { DishDetailService } from "./dish-detail.service";
import { DISH_ITEMS } from "./dish-items";


@NgModule({
  declarations: [
    AppComponent,
    RestaurantHomeComponent,
    RestaurantMenuComponent,
    RestaurantMenuDescriptionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [DishDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
