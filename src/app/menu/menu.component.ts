
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menuItems = [
    {name: 'Food'},
    {name: 'Drink'},
    {name: 'Desserts'},
    {name: 'Salads'}  
  ]

  constructor() {     
  }

  ngOnInit(): void {
  }
}
