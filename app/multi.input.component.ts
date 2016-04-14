/*
 *  Angular 2 Component -
 *
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'ivar-multi-input',
    templateUrl: 'app/multi-input.tpl.html'
})


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