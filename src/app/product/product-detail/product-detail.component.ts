import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService

  ) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.productsvc.get(this.id).subscribe(
      res => { console.log(res); this.product = res; },
      err => { console.error(err) }
    )

  }

  deleteProduct() {
    this.id = this.route.snapshot.params.id
    this.productsvc.remove(this.id).subscribe(
      res => { console.log("Success:", res); this.product = res; this.router.navigateByUrl("product/list"); },
      err => { console.error(err) });
      }
      

}
