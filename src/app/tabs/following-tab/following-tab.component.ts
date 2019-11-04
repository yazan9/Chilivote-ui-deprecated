import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/models/UserDTO';

@Component({
  selector: 'app-following-tab',
  templateUrl: './following-tab.component.html',
  styleUrls: ['./following-tab.component.css']
})
export class FollowingTabComponent implements OnInit {

  users: UserDTO[] = [];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getFollowing().subscribe((result) => {
      this.users = result;
      this.users.forEach((user) => {user.isFollowing = true;})
    })
  }
}
