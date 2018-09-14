import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root' // if for any reason you only need the servce in this compononent you change it here.
})
export class ProductsService {

  products = [];

  constructor( private api: ApiService ) { }

  getProducts(): any {
    return this.api.get('/products');
  }
}
