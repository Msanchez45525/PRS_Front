import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  user!: User;
  requests: Request[] = [];
  request!: Request;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService

  ) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.requestsvc.get(this.id).subscribe(
      res => { console.log(res); this.request = res; },
      err => { console.error(err) }
    )

  }

  deleteUser() {
    this.id = this.route.snapshot.params.id
    this.requestsvc.remove(this.id).subscribe(
      res => { console.log("Success:", res); this.request = res; this.router.navigateByUrl("request/list"); },
      err => { console.error(err) });
  }


}
