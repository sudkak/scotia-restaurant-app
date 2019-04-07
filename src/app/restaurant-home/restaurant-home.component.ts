import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css']
})
export class RestaurantHomeComponent implements OnInit {

  selectedItem: Dish;

  constructor() { }

  ngOnInit() {
  }

  selectItem(item: Dish) {
     this.selectedItem = item;
  }



}
