import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

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

  save(): void {
    this.user.id = +this.user.id;
    console.debug("B4", this.user);
    this.usersvc.change(this.user).subscribe(
      res => { console.log("Create successful"); this.router.navigateByUrl("user/list"); },
      err => { console.error(err) });
    ;
  }

}
