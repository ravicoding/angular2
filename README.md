# Learning Angular 2

Few reuseble commponents I'm trying as part of language understanding.

##MultiInputComponent

Intended to write single component for all types of input activities
::       
export class MultiInputComponent {

    inputData:string="";

    bsData:string[] = [
        'this is foo1',
        'this is foo2',
        'this is foo3'
    ];

    onKey(event: any) {
        if(event.keyCode == 13) {
            this.bsData.push(event.target.value);
            this.inputData ='';
            event.target.value='';
        } else {
            this.inputData = event.target.value;
        }
    }

}

::       

##ivar-grid

Simple grid component
{
/**
 * Created by narer on 5/19/2016.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'ivar-grid',
    templateUrl: 'app/grid/grid.tpl.html',
    styles: [`
    .ivar-grid-css {
      margin:20px;
      width:800px;
    }
    table {
        border : 1px solid #ddd;
     }
     th{
     height: 35px;
     M padding-left: 10px;
     }
  `]
})


export class IvarGridComponent {
    public rows = [];
    public cols:Column[] = [];
    constructor() {
        this.cols.push(new Column('id','ID',300));
        this.cols.push(new Column('name','Name',500));
        this.generateMockData();
    }

    generateMockData() {
        for(let i=0; i < 100;++i){
            this.rows.push({id:Math.floor((Math.random() * 10000) + 1),name:'abc'+i});
        }
    }

}

class Column {
    constructor(id,name,width){
        this.id = id;
        this.name = name;
        this.width = width;
    }
    id:string;
    name:string;
    width:number;
}

class GenerateMockTable {

    generateRows() {

    }
}
}
