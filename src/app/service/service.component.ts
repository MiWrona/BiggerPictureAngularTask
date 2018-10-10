import { Component, OnInit, Input, Output, NgModule, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() element: {name: string };
  
 
  
  public serviceVisibilty = 'show';

  constructor() { }

  ngOnInit() {
      
  }


  toggle_class(){
    if(this.serviceVisibilty=="show"){
        this.serviceVisibilty='hide';
    }else{
        this.serviceVisibilty='show';
    }
}
 
}




//rangeValue_1 = ; 
//   rangeValue_2 = ; 
//   rangeValue_3 = ; 
//   rangeValue_4 = ; 

//   assets = [];



//   services: singleServiceValue[] = [
//       new singleServiceValue( this.rangeValue_1, this.rangeValue_2, this.rangeValue_3, this.rangeValue_4, this.assets[] )
//   ];
