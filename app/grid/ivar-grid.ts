/**
 * Created by narer on 5/19/2016.
 */

import {Component} from 'angular2/core';
import {MockTableService} from './ivar-service'

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
         height:500px;
     }
     th{
     height: 35px;
     background-color: #b1b1b1;
     padding-left: 10px;
     }
  `]
})

/**
 *  IvarGrid
 */
export class IvarGridComponent {
    public rows = [];
    public cols:Column[] = [];
    private mockTableService:MockTableService = new MockTableService();

    constructor() {
        this.cols.push(new Column('id','ID',150));
        this.cols.push(new Column('name','Name',300));
        this.cols.push(new Column('data','Data',400))
        this.rows = this.mockTableService.generateMockData();
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




