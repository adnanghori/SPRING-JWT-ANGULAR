import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
credentials={
  username : '',
  password : ''
}
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
 onSubmit(){
  if(this.credentials.username!=''&& this.credentials.password!=''){
    this.loginService.generateToken(this.credentials).subscribe(

      (response:any )=>{
        
        this.loginService.loginUser(response.token);
        window.location.href="/dashboard"
      },
      error=>{
        console.log(error)
      }
    )

  }
  else{
    console.log("Fields Are Empty");
  }
 }
}
