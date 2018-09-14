import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';
import { Post } from '../classes/post';
import { Comment } from '../classes/comment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // tslint:disable-next-line:max-line-length
  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService,
    private userService: UserService,
    private router: Router ) { }

  getPosts() {
    return this.api.get('/posts');
  }

  getPost( _id: string ) {
    this.api.get(`/post/${_id}`);
  }

  makePost( post: Post) {
    return this.api.post('/newPost', post).subscribe( () => { return; },
      err => console.log(`An Error Occurred: ${err}`),
      () => ( this.router.navigateByUrl('/') )
    );
  }
  makeComment( comment: Comment , post_id: string ) {
    return this.api.post(`/newComment/${post_id}`, comment).subscribe( () => { return; },
      err => console.log(`An Error Occurred: ${err}`),
      () => this.router.navigateByUrl(`/post/${post_id}`)
    );
  }
}

