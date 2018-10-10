import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BiggerPicture';
  serviceElements = [ ];
  // assetsElements = [ ];


  onServiceAdded(serviceData: {serviceName: string, serviceValue: number }) {
    this.serviceElements.push({
      name: serviceData.serviceName,
      value_1: serviceData.serviceValue
    });
  }

  generate(){
    console.log(this.serviceElements);
  }

//   onAssetAdded(assetData: {assetName: string, assetNumber: number}) {
//     console.log('lol');
//     this.assetsElements.push({
//       name: assetData.assetName,
//       // number: assetData.assetNumber + 1
//   });
// }


}
