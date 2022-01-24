import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SHERWYN';
  currentLocation: any;
  header: boolean =false;
  footer: boolean  =false;
  constructor(private location: Location) {
   
  }
  ngDoCheck() {
    this.currentLocation = this.location.path();
    console.log(this.currentLocation)
    if(this.currentLocation=="/whoWeAre"||this.currentLocation=="/divisions"||this.currentLocation=="/careers"||this.currentLocation=="/contactUs"){
        this.header=true;
        this.footer=true;
    }
    if(this.currentLocation=="/landing"||this.currentLocation==""||this.currentLocation==null||this.currentLocation==undefined){
        this.header=false;
        this.footer=false;
    }
  }
  
}
