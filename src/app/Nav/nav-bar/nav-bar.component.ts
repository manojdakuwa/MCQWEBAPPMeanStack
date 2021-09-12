import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/Service/auth-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  LoggedIn:any = false;
  LoggedOut:any = true;
  user:any = '';

  constructor(private authuser:AuthServices, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
   }

  ngOnInit(): void {
    if(this.authuser.loggedIn()){
      this.LoggedIn = true;
      this.LoggedOut=false;
      this.user = this.authuser.loggedIn();
    }else{
      this.LoggedIn = false;
      this.LoggedOut=true;
      this.user = '';
    }
  }


  Logout()
  {
    sessionStorage.removeItem('User');
    sessionStorage.removeItem('Email');
    this.router.navigateByUrl('Login');
  }

}
