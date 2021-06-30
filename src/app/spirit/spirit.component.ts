import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})

@Injectable()
export class SpiritComponent implements OnInit {

  photos = [];

  constructor(public http: HttpClient) { }

  public url: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY";


  get2DaysAgoImages(){

    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    })
    
    this.photos.push("http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" as never);

  }


  getYesterdayImages(){
    
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    })
    
    this.photos.push("http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" as never);

  }



  getTodayImages(){
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    })
    
    this.photos.push("http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" as never);
  }
  handleError(err: any): any {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

}