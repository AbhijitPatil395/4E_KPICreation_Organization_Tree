import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { KpiService } from '../_services/kpi.service';

@Component({
  selector: 'app-kpi-details',
  templateUrl: './kpi-details.component.html',
  styleUrls: ['./kpi-details.component.css']
})
export class KpiDetailsComponent implements OnInit,OnChanges {
  @Input() kpi:any;
  arrKpi:any[]=[];
  title:string='';
  constructor(private ks:KpiService) { }
  ngOnInit(): void {
    console.log("on init kip details")
    console.log(this.kpi)
  }
  ngOnChanges(): void {
    console.log("kpi details onchanges")
  }
}
