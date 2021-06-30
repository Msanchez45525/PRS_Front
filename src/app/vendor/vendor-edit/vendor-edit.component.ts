import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  
  vendor!: Vendor;
  id: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.vendorsvc.get(this.id).subscribe(
      res => { console.log(res); this.vendor = res; },
      err => { console.error(err) }
    )
  }

  save(): void {
    this.vendor.id = +this.vendor.id;
    console.debug("B4", this.vendor);
    this.vendorsvc.change(this.vendor).subscribe(
      res => { console.log("Create successful"); this.router.navigateByUrl("vendor/list"); },
      err => { console.error(err) });
    ;
  }

}
