import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
//import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit
{
  @Input() data:any=[];
  constructor() { }

  pieChartOptions = {
    responsive: true
  }

  pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY','JUNE','JULLY'];
  pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
  ]

  pieChartData:any = [
    {
        data: {}
    }
  ];

  // @ViewChild('canvas') canvas!:ElementRef;
  ngOnInit(): void {

    let result = (({ notDefinedKPI, notMonitored, achieved, onTrack,notOnTrack,kpiMonitored  }) => ({ notDefinedKPI,notMonitored, achieved, onTrack,notOnTrack,kpiMonitored }))(this.data);
   
    this.pieChartLabels= Object.keys(result)
    this.pieChartData[0].data=Object.values(result);
  }

  // draw() {
  //   var angles=[Math.PI*0.5,Math.PI*0.5,Math.PI*0.1,Math.PI*0.2,Math.PI*0.3,Math.PI*0.4];
  //   var colors = ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E', '#CDDC39', '#18FFFF', '#F44336', '#FFF59D', '#6D4C41']
  //    const cv =this.canvas.nativeElement;
  //    //console.log(cv)
  //    var ctx = cv.getContext("2d");
  //    // Our angle
  //    var biginAngle = 0;
  //    var endAngle = 0;
     
  //    for(let i=0;i<angles.length;i++)
  //    {
  //      biginAngle=endAngle;
  //      endAngle=endAngle+angles[i];
  //      ctx.beginPath();
  //      ctx.fillStyle = colors[i % colors.length];
  //       // Go to center of the Chart
  //       ctx.moveTo(200, 200);
  //       // Draw an Arc
  //       // arc(centerX, centerY, radius, angleStart, angleEnd)
  //       ctx.arc(200, 200, 120, biginAngle,endAngle );
  //       // Draw a line to close the pie slice
  //       ctx.lineTo(200, 200);
  //       // Print the path
  //       ctx.stroke();
  //       ctx.fill();
  //    }
     
     
  //  }
}
