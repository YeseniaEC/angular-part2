import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( private ps: ProductsService ) { }

  ngOnInit() {
    this.ps.getProducts()
    .subscribe( products => {
      console.log(products);
    });
  }

}
