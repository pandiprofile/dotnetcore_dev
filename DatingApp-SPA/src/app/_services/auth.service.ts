import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedToken: any;
  jwtHelper = new JwtHelperService();

constructor(private http: HttpClient, private userService: UserService) { }

register(model: any) {
  return this.http.post('http://localhost:5000/api/auth/register', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        console.log(user);
        return user;
      }
    })
  );
}

login(model: any) {
  return this.http.post('http://localhost:5000/api/auth/login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user.user));
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        console.log(user);
        // return this.userService.getUsers();
        return user;
      }
    })
  );
}

loggedIn() {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    return true;
  }
  return false;
  // return !this.jwtHelper.isTokenExpired(token);
  // console.log(token);
}

}
