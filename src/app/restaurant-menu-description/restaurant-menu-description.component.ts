import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'app-restaurant-menu-description',
  templateUrl: './restaurant-menu-description.component.html',
  styleUrls: ['./restaurant-menu-description.component.css']
})
export class RestaurantMenuDescriptionComponent implements OnInit {

  @Input() item: Dish;
  constructor() { }

  ngOnInit() {
  }

}
