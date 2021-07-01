import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Product } from 'src/app/product/product.class';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['./requestlines-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {


  requestline: RequestLine = new RequestLine();
  products: Product[] = [];

  constructor(
    private syssvc: SystemService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService

  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    console.debug("B4", this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => {
        console.log("Create successful"); this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`)
      },
      err => {
        console.error(err);
      });

  }

  ngOnInit(): void {
    
    this.requestline.requestId = +this.route.snapshot.params.id;
    this.productsvc.list().subscribe(
      res => { console.log(res); this.products = res; },
      err => { console.error(err); }
    )
  }

}
