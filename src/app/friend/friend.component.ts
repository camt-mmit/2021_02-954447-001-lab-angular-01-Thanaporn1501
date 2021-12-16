import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  public friend1 = {
    firstname: "Komchan",
    lastname: "Thongsen",
    nickname: "Keem"
  }
  public friend2 = {
    firstname: "Sukrit",
    lastname: "Noppakhun",
    nickname: "Eng"
  }

  constructor() { }

  ngOnInit(): void {
  return
  }
}
