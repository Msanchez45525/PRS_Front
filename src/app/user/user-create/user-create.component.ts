import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  users: User[] = [];

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router

  ) { }

  save(): void {
    this.user.id = +this.user.id;
    console.debug("B4", this.user);
    this.usersvc.create(this.user).subscribe(
      res => {
        console.log("Create successful"); this.router.navigateByUrl("user/list")
      },
      err => {
        console.error(err);
      });

  }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => { console.log(res); this.users = res; },
      err => { console.error(err); }
    )
  }

}
