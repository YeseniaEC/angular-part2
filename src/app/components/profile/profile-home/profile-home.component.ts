import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getProfileUrl();
  }

}
