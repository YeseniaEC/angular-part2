import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];

  exists: Boolean = false;

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  constructor( private userService: UserService, private sessionStorage: SessionStorageService, private token: TokenService ) { }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(( res: any) => {
      console.log(res);
      this.users = res;
    });
  }

  userHasLength(): Number {
    return this.users.length;
  }

  ngOnInit() {
    // this.getAllUsers();
    this.token.checkToken('/login');
  }

}
