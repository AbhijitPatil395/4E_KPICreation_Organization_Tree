import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../user';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.dev_tqmi_url+'/user-management/login'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  arrUsers:user[]=[];
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      "username":username,
      "password":password
    }, httpOptions);
  }
  // getUsers():Observable<any>{
  //   return this.http.get(USER_API)
  // }
}