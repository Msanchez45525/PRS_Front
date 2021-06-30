import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  searchCriteria: string="";
  sortColumn: string ="id";
  sortAsc: boolean = true;
  sortFn(column: string): void {
    if (column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }


  constructor(
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res => {
        console.log("Products:", res);
        this.products = res;
      },
      err => { console.error(err); }
    );

  }

  

}
