import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

readonly rootUrl='http://127.0.0.1:6969/api/users'  

  constructor(private http: HttpClient) { }
  registeruser(user: User): Observable<User> {
    const body: User = {
      Username: user.Username,
      Password: user.Password,
      Email: user.Email,
      Firstname: user.Firstname,
      Lastname: user.Lastname
    }
    let jsonbody = JSON.stringify(body);
    console.log(jsonbody);
    return this.http.post<User>(this.rootUrl, jsonbody,{
      headers : new HttpHeaders ({
        'Content-Type':'application/json'
      })
    });
  }
}
