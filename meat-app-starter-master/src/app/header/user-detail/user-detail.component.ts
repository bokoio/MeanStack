import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.services'
import { User } from '../../security/login/user.model'

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedIn():boolean{
     if(this.loginService.user !== undefined){
      console.log(this.loginService.user)
    }
  	return this.loginService.isLoggedIn()
  }

  login(){
  	this.loginService.handleLogin()
  }

  logOut(){
    this.loginService.logOut()
  }

}
