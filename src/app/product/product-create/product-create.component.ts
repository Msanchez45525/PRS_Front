import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];
  vendors: Vendor[] = [];



  constructor(
    private syssvc: SystemService,
    private productsvc: ProductService,
    private router: Router,
    private vendorsvc: VendorService

  ) { }

  ngOnInit(): void {
      this.vendorsvc.list().subscribe(
      res => { console.log(res); this.vendors = res; },
      err => { console.error(err); }
    )
  }


  
  save(): void {
    this.product.vendorId = +this.product.vendorId;
    console.debug("B4", this.product);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.log("Create successful"); this.router.navigateByUrl("product/list")
      },
      err => {
        console.error(err);
      });
      
    }


}
