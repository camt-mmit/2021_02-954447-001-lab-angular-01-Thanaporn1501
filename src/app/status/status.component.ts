import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  public navigator:Navigator = window.navigator;
  public date:Date = new Date();

  constructor() { }

  ngOnInit(): void {
    return
  }

}
