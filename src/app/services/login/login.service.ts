import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080"

  constructor(private http:HttpClient) { }
  generateToken(credentials:any){
    // will generate token
    return this.http.post(`${this.url}/token`,credentials);
  }
  loginUser(token: string){
    localStorage.setItem("token",token);
    return true;
  }
  isLoggedIn(){
    let token = localStorage.getItem("token");
      if(token==undefined|| token==''||token==null){
        return false;
    }
    else{
      return true;
    }
  }
  logOut(){
    localStorage.removeItem("token");
    return true;
  }
  getToken(){
    
    return localStorage.getItem("token");
    
  }
}
