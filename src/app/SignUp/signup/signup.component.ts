import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/Service/auth-services.service';
interface newUser {
  email:string;
  name:string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  resObj : newUser
  form: FormGroup;
  constructor(private services: AuthServices, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.services.loggedIn()){
      const user = sessionStorage.getItem('User');
      if(user==''){
        this.router.navigateByUrl('Login');
      }
    }
  }

  Login(){
    const val = this.form.value;
    if(val.email && val.name){
      this.services.register(val).subscribe(response=>{
        this.resObj = response['user'];
        sessionStorage.setItem('User', this.resObj.name);
        sessionStorage.setItem('Email', this.resObj.email);
        this.router.navigateByUrl('mcq-dashboard');
        this.form.reset();
      })
    }
  }


}
