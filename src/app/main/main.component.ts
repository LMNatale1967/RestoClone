
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  menuItems = [
    {name: 'Pizza Margherita'},
    {name: 'Pizza Double Cheese Margherita'},
    {name: 'Pizzas Farm House'},
    {name: 'Pizza Peppy PaneerSalads'},
    {name: 'Pizza Mexican Green Wave'},
    {name: 'Pizza Deluxe Veggie'},
    {name: 'Pizza Veg Extravaganza'},
    {name: 'Pizza CHEESE N CORN'} 
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }
}
