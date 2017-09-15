import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private UserService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.UserService.getUser()
      .subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.log(err);
      }
      );
  }

}
