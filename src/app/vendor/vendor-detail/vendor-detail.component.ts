import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;
  id: number =0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.vendorsvc.get(this.id).subscribe(
      res => {console.log(res); this.vendor = res;},
      err => {console.error(err)}
    )
  }

  deleteVendor() {
    this.id = this.route.snapshot.params.id
    this.vendorsvc.remove(this.id).subscribe(
      res => { console.log("Success:", res); this.vendor = res; this.router.navigateByUrl("vendor/list"); },
      err => { console.error(err) });
      }

}
