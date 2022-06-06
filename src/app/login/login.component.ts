import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormsg:string='';
  constructor(private fb:FormBuilder,private ts:TokenStorageService,private router:Router,private as:AuthService) { }
  profileForm = this.fb.group({
    userName: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.minLength(4)]]
  }); 
  get name(){
    return this.profileForm.get("userName")
  }
  get password(){
    return this.profileForm.get("password")
  }
  ngOnInit(): void 
  {
    if(this.ts.getToken())
    this.router.navigate(['/home'])
  }
  onSubmit(){
    //this.ts.saveToken("sdkfjskfsdkjfskfkjfskfskfnd");
    this.as.login(this.profileForm.value.userName,this.profileForm.value.password).subscribe(
      (data)=>{
        this.ts.saveToken(data.response)
        this.ts.saveUser(data)
        this.ts.storeTokenDetails(data.response);
        console.log("ready to navigtate")
        this.router.navigate(['/home'])
        this.errormsg='';
      },
      (err)=>{
        this.errormsg="Invadlid userId or Password"
        console.log(this.errormsg)
      }

    );
  }

  onCheckboxClick($event:any){
    console.log("in checbox click")
    console.log($event.target.checked)
    this.ts.changeStorage($event.target.checked)
  }


}
