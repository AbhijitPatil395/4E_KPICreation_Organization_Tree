import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
  storageObj:Storage=localStorage;
  
  firstname:string='';
  lastname:string='';
  isAdmin!:boolean;
  isTokenAvailable:boolean=false;

  public saveToken(token: string): void {
    this.storageObj.removeItem(TOKEN_KEY);
    this.storageObj.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return this.storageObj.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    this.storageObj.removeItem(USER_KEY);
    this.storageObj.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = this.storageObj.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  getUserName():string{
   let fname=this.storageObj.getItem('first_name');
   let lname=this.storageObj.getItem('last_name');
   if(fname && lname){
     return fname+'.'+lname;
   }
   return '';
  }
  storeTokenDetails(token:any){
    if(token)
    {
    this.firstname = (JSON.parse(atob(token.split('.')[1]))).firstname.toLowerCase();
    //console.log("first name:"+this.firstname)
    this.storageObj.setItem('first_name',this.firstname);
    this.lastname=(JSON.parse(atob(token.split('.')[1]))).lastname.toLowerCase();
    this.storageObj.setItem('last_name',this.lastname);
    this.isAdmin=(JSON.parse(atob(token.split('.')[1]))).isAdmin;
    this.storageObj.setItem('isAdmin',this.isAdmin?'true':'false');
    }

  }
  isTokenExpired(token:any):boolean {
    if(token)
    {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
    return true;
  }
  changeStorage(flag:boolean){
    if(flag)
    this.storageObj=localStorage;
    else
    this.storageObj=sessionStorage;

    //console.log(this.storageObj)
  }
}