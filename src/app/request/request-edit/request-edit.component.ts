import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  
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

  save(): void {
    this.request.id = +this.request.id;
    console.debug("B4", this.request);
    this.requestsvc.change(this.request).subscribe(
      res => { console.log("Create successful"); this.router.navigateByUrl("request/list"); },
      err => { console.error(err) });
    ;
  }

}