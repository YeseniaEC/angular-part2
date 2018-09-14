import { Injectable } from '@angular/core';

import { User } from '../classes/user';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profileUrl: string;
  currentProfile: IUser;

  // tslint:disable-next-line:max-line-length
  constructor( private api: ApiService, private router: Router, private localStorage: LocalStorageService, private route: ActivatedRoute ) { }

  //  REGISTERING USER
  register(user: User) {
    return this.api.post('/postUser', user ).subscribe( (res: any) => {
      this.localStorage.set('currentUser', res.user);
      this.router.navigateByUrl('/');
    }, err => console.log('There was an error!', err), () => this.router.navigateByUrl('/'));
  }

  // LOGGING IN USER
  login(user: any) {
    return this.api.post('/userLogin', user ).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user);
    }, err => console.log('Not Logged In', err), () => this.router.navigateByUrl('/'));
  }

  // LOGOUT USER
  logout() {
    return this.localStorage.remove('currentUser');
    // this.router.navigateByUrl('/login');
  }

  // GET ALL USERS BACK
  getAllUsers() {
    return this.api.get('/getAllUsers');
  }

  // GET USER(1)
  getUser(_id) {
    return this.api.get(`/user/${_id}`);
  }

  getProfileUrl() {
    console.log(this.route.snapshot.url);
  }
}
