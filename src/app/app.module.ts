import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helper/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PiechartComponent } from './piechart/piechart.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { NgChartsModule } from 'ng2-charts';
import { AddkpiComponent } from './addkpi/addkpi.component';
import { ViewKpiComponent } from './view-kpi/view-kpi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { NgSelectModule } from "@ng-select/ng-select";
import { KpiDetailsComponent } from './kpi-details/kpi-details.component';
import { ChartTreeComponent } from './chart-tree/chart-tree.component';
import { DiagramModule, HierarchicalTreeService, DataBindingService } from '@syncfusion/ej2-angular-diagrams';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTree, MatTreeModule } from '@angular/material/tree';
import {MatIcon, MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    PiechartComponent,
    OrgtreeComponent,
    AddkpiComponent,
    ViewKpiComponent,
    KpiDetailsComponent,
    ChartTreeComponent
  ],
  imports: [
    BrowserModule,NgSelectModule,FormsModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,NgChartsModule,DiagramModule, BrowserAnimationsModule,
    MatIconModule,MatTreeModule
  ],
  providers: [authInterceptorProviders,HttpClient,HierarchicalTreeService, DataBindingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
