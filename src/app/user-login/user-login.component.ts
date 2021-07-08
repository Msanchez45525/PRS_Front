import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../core/system.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: string = '';


  constructor(
    private syssvc: SystemService,
    private router: Router,
    private usersvc: UserService

  ) { }

  login(): void {
    this.syssvc.loggedInUser = null;
    this.usersvc.login(this.username, this.password).subscribe(
      res => {this.syssvc.loggedInUser = res;
        if(this.syssvc.loggedInUser != null){
          this.router.navigateByUrl("/home")
        }
       },
        err => {console.error(err), this.message = "Login failed!"}
        );
    }

ngOnInit(): void {
  this.syssvc.loggedInUser = null;
}

}
