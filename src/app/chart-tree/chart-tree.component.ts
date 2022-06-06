import { Component, Input, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, ConnectorModel, SnapSettingsModel, LayoutModel, DataSourceModel, TextModel } from '@syncfusion/ej2-angular-diagrams';
import { inputs } from '@syncfusion/ej2-angular-diagrams/src/diagram/diagram.component';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
  selector: "app-chart-tree",
templateUrl:'./chart-tree.component.html',
  encapsulation: ViewEncapsulation.None
  })
  export class ChartTreeComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public snapSettings!: SnapSettingsModel;
  public items!: DataManager;
  public layout!: LayoutModel;
  public dataSourceSettings!: DataSourceModel;

  @Input() chartData!:object[];

  //Initializes data source
public data: object[] = [
    {
        "Name": "ameya.gholap"
    },
    {
        "Name": "abhijit.patil_Demo",
        "ReportingPerson": "vikas.raut"
    },
    {
        "Name": "suhrud.mhatre",
        "ReportingPerson": "vikas.raut"
    },
    {
        "Name": "omkar.goskewar",
        "ReportingPerson": "vikas.raut"
    },
    {
        "Name": "ganesh.gaikwad",
        "ReportingPerson": "vikas.raut"
    },
    {
        "Name": "vikas.raut",
        "ReportingPerson": "ameya.gholap"
    }


    
    
];


  //Sets the default properties for all the Nodes
  public getNodeDefaults(obj: NodeModel, diagram: Diagram): NodeModel {
      obj.shape = {
          type: 'Text',
          content: (obj.data as {Name: 'string'}).Name
      };
      obj.style = {
          fill: 'None',
          strokeColor: 'none',
          strokeWidth: 2,
          bold: true,
          color: 'white'
      };
      obj.borderColor = 'white';
      obj.width = 100;
      obj.height = 40;
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      (obj.shape as TextModel).margin = {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5
      };
      return obj;
  }
  //Sets the default properties for all the connectors
  public getConnectorDefaults(connector: ConnectorModel, diagram: Diagram): ConnectorModel {
      connector.style = {
          strokeColor: '#6BA5D7',
          strokeWidth: 2
      };
      if(connector.targetDecorator?.style)
      {
      connector.targetDecorator.style.fill  =  '#6BA5D7';
      connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
      }
      connector.type = 'Orthogonal';
      return connector;
  }
  ngOnInit(): void {
    console.log(this.data)
    console.log("chart tree on init")
    //this.data=this.chartData;
    
    //console.log(this.data)
      this.snapSettings = {
          constraints: 0
      }
      console.log(this.chartData as JSON[])
      console.log('-------')
      console.log(this.data as JSON[])
      this.items = new DataManager(this.data as JSON[], new Query().take(7));
      //Uses layout to auto-arrange nodes on the Diagram page
      this.layout = {
          //Sets layout type
          type: 'HierarchicalTree'
      }
      //Configures data source for Diagram
      this.dataSourceSettings = {
          id: 'Name',
          parentId: 'ReportingPerson',
          dataSource: this.items
      }
  }
  }