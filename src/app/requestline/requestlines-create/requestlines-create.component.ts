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


  newRequestline = new RequestLine();
  products: Product[] = [];
  requestId: number = 0;
  product!: Product;

  constructor(
    private syssvc: SystemService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService

  ) { }

  Save(): void {
    this.newRequestline.requestId = +this.requestId;
    this.newRequestline.productId = +this.newRequestline.productId;
    console.debug("B4", this.newRequestline);
    this.requestlinesvc.create(this.newRequestline).subscribe(
      res => {
        console.log("Create successful"); this.router.navigateByUrl(`/request/lines/${this.getId()}`);
      },
      err => {
        console.error(err);
      });

  }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res => { console.log(res); this.products = res; },
      err => { console.error(err); }
    )
    this.requestId = this.getId()

  }

  getId(): number {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;

  }
}

