import { Component, Injectable, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoLogin';

  constructor(private ts:TokenStorageService){}

  ngOnInit(): void {
    
  }

  isToken():boolean
  {
    //console.log("istoken called")
    let token=this.ts.getToken();
    if(token && !this.ts.isTokenExpired(token))
    return true;
    else
    return false;
  }
  
}
