import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  githubUrl = 'https://api.github.com/users/YeseniaEC/repos?per_page=100';

  constructor( private http: HttpClient ) { }
  getAllRepos() {  // httpf needs to be used since it is an outside source
    return this.http.get(this.githubUrl);
  }
}
