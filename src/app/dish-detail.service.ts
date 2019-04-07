import { Injectable } from '@angular/core';
import { Dish } from "./dish";
import { DISH_ITEMS } from "./dish-items";

@Injectable({
  providedIn: 'root'
})
export class DishDetailService {

  constructor() { }
   getDishes(): Dish[] {
       return DISH_ITEMS ;
    }
}
