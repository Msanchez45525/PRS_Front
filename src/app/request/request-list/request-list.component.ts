import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];

  searchCriteria: string="";
  sortColumn: string ="id";
  sortAsc: boolean = true;
  sortFn(column: string): void {
    if (column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }


  constructor(
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      res => {
        console.log("Request:", res);
        this.requests = res;
      },
      err => { console.error(err); }
    );

  }

  

}
