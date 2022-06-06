import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private ts:TokenStorageService,private router:Router) { }

  canActivate(): boolean {
    //console.log("inside guard")
    let token=this.ts.getToken();
    //console.log(token);
    //console.log(this.ts.isTokenExpired(token))
    if (!token || this.ts.isTokenExpired(token)) {
      this.router.navigate(['/login'])
      return false;
    }
    
    return true;
  }
  // canActivate(): Observable<boolean> {
  //   console.log("inside guard")
  //   let token=this.ts.getToken();
  //   console.log(token);
  //   console.log(this.ts.isTokenExpired(token))

  //   // if (!token || this.ts.isTokenExpired(token)) {
  //   //   this.router.navigate(['/login'])
  //   this.ks.getCategory().subscribe((data)=>{
  //     if(data)
  //     return of(true)
     
     
  //   },(err)=>{
  //     return of(false)
  //   });
  //   //   // return false;
  //   // }
     
    
  //   // return true;
  // }

}
