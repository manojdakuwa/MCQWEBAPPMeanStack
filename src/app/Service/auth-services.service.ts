import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
interface newUser {
  email:string;
  name:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private url = environment.URL;

  constructor(private http: HttpClient) { }
  register(newUser:newUser) {
    var User = { 
    email: newUser.email, 
    name: newUser.name 
}
    return this.http.post(this.url + '/api/register', User, { headers: this.headers });
  }


  postQuiz(quiz) {
    return this.http.post(this.url + '/api/createQuiz', quiz , { headers: this.headers });
  }

  loggedIn() {
    const token: string = sessionStorage.getItem('User');
    return token;
  }
}
