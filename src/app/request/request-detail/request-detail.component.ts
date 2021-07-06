import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

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

  deleteRequest() {
    this.id = this.route.snapshot.params.id
    this.requestsvc.remove(this.id).subscribe(
      res => { console.log("Success:", res); this.request = res; this.router.navigateByUrl("request/list"); },
      err => { console.error(err) });
  }


}
