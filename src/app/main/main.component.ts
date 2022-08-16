
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  menuItems = [
    {name: 'Pizza Margherita', description: 'A hugely popular margherita, with a deliciously tangy single cheese topping.'},
    {name: 'Pizza Double Cheese Margherita', description: 'The ever-popular Margherita - loaded with extra cheese'},
    {name: 'Pizzas Farm House', description: 'A pizza that goes ballistic on veggies !'},
    {name: 'Pizza Peppy Paneer', description: 'The best Mexican Peppy Paneer Pizza'},
    {name: 'Pizza Mexican Green Wave', description: 'The best Mexican Green Wave Pizza'},
    {name: 'Pizza Deluxe Veggie', description: 'The best Deluxe Veggie Pizza'},
    {name: 'Pizza Veg Extravaganza', description: 'The best Veg Extravaganza Pizza'},
    {name: 'Pizza CHEESE N CORN', description: 'The best CHEESE N CORN Pizza'} 
  ]

  displayDescription(pDescription:string, pEvent:any) {
    alert(pDescription);
    console.log(pEvent);
  }

  constructor() { 
  }

  ngOnInit(): void {
  }
}
