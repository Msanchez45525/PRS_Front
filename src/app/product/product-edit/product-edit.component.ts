import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  id: number = 0;
  vendors: Vendor[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private vendorsvc: VendorService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.productsvc.get(this.id).subscribe(
      res => { console.log(res); this.product = res; },
      err => { console.error(err) }
    )
    this.vendorsvc.list().subscribe(
      res => { console.log(res); this.vendors = res; },
      err => { console.error(err); }
    )
  }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    console.debug("B4", this.product);
    this.productsvc.change(this.product).subscribe(
      res => {
        console.log("Change successful"); this.router.navigateByUrl("product/list")
      },
      err => {
        console.error(err);
      });

  }
}
