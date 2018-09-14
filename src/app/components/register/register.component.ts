import { Component, OnInit } from '@angular/core';

import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor( private userService: UserService ) { }

  register() {
    this.userService.register(this.user);
  }

  ngOnInit() {
  }

}
