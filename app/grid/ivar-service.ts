import { Injectable } from 'angular2/core';

@Injectable()
export class MockTableService {

    constructor(){

    }
     generateMockData() {
        let rows = [];
        for(let i=0; i < 100;++i){
            rows.push({
                id:Math.floor((Math.random() * 10000) + 1),
                name:'abc'+i,
                data:'blah blah blah blah blah blah blah blah blah '+i
            });
        }
        return rows;
    }
}