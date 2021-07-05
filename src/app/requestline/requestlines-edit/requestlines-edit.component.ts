import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {

  requestline!: RequestLine;
  id: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.requestlinesvc.get(this.id).subscribe(
      res => { console.log(res); this.requestline = res; },
      err => { console.error(err) }
    )
  }

  save(): void {
    this.requestline.id = +this.requestline.id;
    console.debug("B4", this.requestline);
    this.requestlinesvc.change(this.requestline).subscribe(
      res => { console.log("Edit successful"); this.router.navigateByUrl("request/list"); },
      err => { console.error(err) });
    ;
  }

}
