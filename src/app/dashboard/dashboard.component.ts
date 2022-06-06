import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KpiDetailsComponent } from '../kpi-details/kpi-details.component';
import { user } from '../user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{

  constructor(private ts:TokenStorageService,private router:Router,private as:AuthService) { }

  kpi:any;
  ngOnInit(): void {
  }

  onLogout()
  {
    this.ts.signOut();
    this.router.navigate(['/login']);
  }
  changeCurrentId(event:any){
    console.log(event)
    this.kpi=event;
    console.log("in dash board:"+this.kpi);
    console.log(this.kpi)

  }
}
