import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddkpiComponent } from './addkpi/addkpi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { ViewKpiComponent } from './view-kpi/view-kpi.component';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';

const routes: Routes = [
  
  {path: 'home', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'orgtree',component:OrgtreeComponent,canActivate:[AuthGuard]},
  {path:'addkpi',component:AddkpiComponent,canActivate:[AuthGuard]},
  {path:'getkpi',component:ViewKpiComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
