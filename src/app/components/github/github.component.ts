import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  repos: object = [];
  searchText: any;

  constructor( private github: GithubService ) { }

  getAllRepos() {
    this.github.getAllRepos().subscribe(res => this.repos = res );
    // when calling in the subscribe make sure the api is actually returning something ex. in github service.
  }
  showDescription(desc) {
    if ( desc === null ) {
      return 'No Description Available';
    } else {
      return desc;
    }
  }
  showLanguage(lan) {
    if ( lan === null ) {
      return 'No Language Information Available';
    } else {
      return lan;
    }
  }
  checkDate(createdDate) {
    const d = new Date();
    const created = new Date(createdDate);
    d.setFullYear(d.getFullYear() + 1);
    if ( d > created ) {
      return true;
    }
  }

  ngOnInit() {
    this.getAllRepos();
  }

}
