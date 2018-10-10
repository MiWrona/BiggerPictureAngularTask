export class singleServiceValue {
    public value_1: number; 
    public value_2: number; 
    public value_3: number; 
    public value_4: number; 

    public assets: Array<string>; 

    constructor( value_1: number, value_2: number, value_3: number, value_4: number, assets: Array<string> ){
       
        this.value_1 = value_1;
        this.value_2 = value_1;
        this.value_3 = value_1;
        this.value_4 = value_1;
        this.assets = assets;
    }
}