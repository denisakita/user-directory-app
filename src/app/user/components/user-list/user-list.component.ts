import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

}
