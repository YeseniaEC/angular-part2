import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private token: TokenService ) {}

  genToken(val) {
    this.token.generateToken(val);
  }
  ngOnInit() {
  }

}
