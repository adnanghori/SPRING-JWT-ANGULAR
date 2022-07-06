import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  public loggedIn = false;
  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn()
  }
  logOut(){
    this.loginService.logOut()
    location.reload( )

   }
   username(){
    var x =  document.getElementById("name");
    console.log(x)
   }
}
