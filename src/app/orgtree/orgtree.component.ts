import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KpiService } from '../_services/kpi.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  child?: FoodNode[];
}

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.css']
})


export class OrgtreeComponent implements OnInit {

  constructor(private ks:KpiService,private ts:TokenStorageService,private router:Router) { 
   
  }
  arr:any[]=[];
  tree:any[]=[];
  chartTree:Object[]=[];
  TREE_DATA!: FoodNode[];
  treeControl = new NestedTreeControl<FoodNode>(node => node.child);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  hasChild = (_: number, node: FoodNode) => !!node.child && node.child.length >= 0;

  ngOnInit(): void 
  {
    this.ks.getTreeDetails().subscribe((data)=>{
      this.arr=data.response;
      // this.arr[5].userHierarchy='ameya.gholap/vikas.raut';
      // this.arr[4].userHierarchy='ameya.gholap'
      // this.arr[4].primaryUserId='ameya.gholap'
      // this.arr[4].firstname='Ameya gholap'
      console.log(this.arr)
      let arrNames:string[]=[];
      
      let map=new Map<string,number>();
      
      for (let i = 0; i < this.arr.length; i += 1) {
          map.set(this.arr[i].primaryUserId,i);
          this.arr[i].child=[];
      }
      for (let i = 0; i < this.arr.length; i += 1) 
      {
        arrNames=this.arr[i].userHierarchy.split('/');
        let len=arrNames.length;
        if(len>1)
        {
          let n=len-2;
          let name=arrNames[n];
          if(name)
          {
          var index=map.get(name)
          }
          if(index)
          this.arr[index].child.push(this.arr[i]);
        }
        else{
          this.tree.push(this.arr[i]);
        }
      }
      //console.log(this.tree);
      this.dataSource.data = this.tree;

      for (let i = 0; i < this.arr.length; i += 1) 
      {
        arrNames=this.arr[i].userHierarchy.split('/');
        let len=arrNames.length;
        if(len==1){
          this.chartTree[0]={Name:arrNames[0]}
        }
      }
      for (let i = 0; i < this.arr.length; i += 1) {
        arrNames=this.arr[i].userHierarchy.split('/');
        let len=arrNames.length;
        if(len>1)
        {
              this.chartTree.push({Name:arrNames[len-1],ReportingPerson:arrNames[len-2]})
        }
      }
      console.log(this.chartTree)
    })
  }

}
