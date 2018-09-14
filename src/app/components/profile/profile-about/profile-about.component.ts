import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/i-user';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {

  currentProfile: IUser = this.userService.currentProfile;

  constructor(private userService: UserService, ) { }

  ngOnInit() {
  }

}
