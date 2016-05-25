# Learning Angular 2

Few reuseble commponents I'm trying as part of language understanding.

##MultiInputComponent

Intended to write single component for all types of input activities

<code>
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
</code> 

##ivar-grid



