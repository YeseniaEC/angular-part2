import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/i-user';
import { Message } from '../../../classes/message';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent implements OnInit {

  message: Message = new Message();
  currentProfile: IUser = this.userService.currentProfile;

  constructor(private userService: UserService, private localStorage: LocalStorageService ) { }

  sendMessage() {
    const sender = `${this.localStorage.get('currentUser').firstName} ${this.localStorage.get('currentUser').lastName}`;
    // this.message.sender = sender;
    console.log(this.message.message);
  }

  ngOnInit() {
  }

}
