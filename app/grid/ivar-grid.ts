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
      padding-left: 10px;
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



