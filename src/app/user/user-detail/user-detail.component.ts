import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService

  ) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.usersvc.get(this.id).subscribe(
      res => { console.log(res); this.user = res; },
      err => { console.error(err) }
    )

  }

  deleteUser() {
    this.id = this.route.snapshot.params.id
    this.usersvc.remove(this.id).subscribe(
      res => { console.log("Success:", res); this.user = res; this.router.navigateByUrl("user/list"); },
      err => { console.error(err) });
      }
      

}
