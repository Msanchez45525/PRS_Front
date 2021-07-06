import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {

  products: Product [] = [];
  requestline!: RequestLine;
  id: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.requestlinesvc.get(this.id).subscribe(
      res => { console.log(res); this.requestline = res; },
      err =>  console.error(err))
      this.productsvc.list().subscribe(
        res => {this.products = res; console.debug("Products Loaded Success", res)},
        err => {console.error(err)}
      )
  }

  save(): void {
    this.requestline.quantity = +this.requestline.quantity;
    this.requestline.id = +this.requestline.id;
    console.debug("B4", this.requestline);
    this.requestlinesvc.change(this.requestline).subscribe(
      res => { console.log("Edit successful"); this.router.navigateByUrl("request/list"); },
      err => { console.error(err) });
    ;
  }

 
}
