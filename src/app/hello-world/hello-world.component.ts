import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  mytest = 'ploytnp'
  mynumber ='1234'
  myarray =[123, 'ploy', 456, 'tnpp'];

  constructor() { }

  ngOnInit(): void {
    return;
  }
  getText():string {
    return `${this.mytest}  ${this.mynumber}`;
  }
}
