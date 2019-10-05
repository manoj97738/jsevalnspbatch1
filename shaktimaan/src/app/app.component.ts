import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nsp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shaktimaan';
  show = true;
  stringType = 'string'
  ngClassObj = {
    classA: true,
    classb: false,
  }
  ngStyleObj = {
    'font-size': '50px',
    'color': 'pink',
  }
  myage = 10;
  public userList = [
    { name: 'manoj', age: 15 },
    { name: 'manoj', age: 15 },
    { name: 'manoj', age: 15 },
    { name: 'manoj', age: 15 },
  ];
  mytract(val, index) {
    console.log(val, index);
  }
  someMethod() {
    this.show = !this.show;
  }
  sm() {
    this.myage = this.myage + 1;
  }
}
