import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dish } from "../dish";
import { OutletContext, Event } from '@angular/router';
import {  DishDetailService }  from "../dish-detail.service";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  @Output() emitDish = new EventEmitter<Dish>();

  selectedItem: Dish;

  items: Dish[];

  constructor(private service:DishDetailService ) { }

  ngOnInit() {
      this.items = this.service.getDishes();
  }

  selectItem(item: Dish) {
       this.selectedItem =  item;
       // Emit the itemId for container component to fetch any further data of Dish Item from server side.
       //TODO:
       this.emitDish.emit(item);
       console.log(item);
  }

}
