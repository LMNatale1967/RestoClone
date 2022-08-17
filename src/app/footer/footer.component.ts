import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  footer = "ORDER - 0.00 CHF";

  constructor() {     
  }

  ngOnInit(): void {
  }

  ionOnlyDescription() {
    alert("I'm a poor <ion-button> With Stranges Properties");
  }
}
