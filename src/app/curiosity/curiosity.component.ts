import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {catchError, first,map, tap} from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import * as angular from 'angular';




@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css',]
})


@Injectable()
export class CuriosityComponent implements OnInit {

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

      // for( let key in data){
      //   if(data.hasOwnProperty(key)){
      //     console.log
      //     this.photos.push(data[key as never]);
      //   }
      // }
    })
    
    this.photos.push("http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" as never);




    ///return this.http.get<Photo[]>(this.url).subscribe(data=>console.log(data));
    // console.log("before pipe");
    // const obs = this.http.get<Photo[]>(this.url).pipe(
    //   map((response:Photo[]) => response.map(photo => {
    //     console.log("in pipe");
    //     console.log(photo.img_src);
    //       photo.img_src = photo.img_src;
    //   }
    //   )
    //   )
    //   )

    //   this.http.get<Photo>(this.url).pipe(
    //   map( response => response.img_src)

    // )
     
    // return this.http.get<Photo>(this.url).subscribe(  =>{
    // //   console.log("inside pipe");
    // //  // console.log(res.img_src);
    // //   console.log(res);
    // //   res.forEach(element => {
    // //     console.log( element.img_src);

      
    //   })
    //   //return this.photos.push(res);
    // }

    // );
      
  


    // .subscribe((data:any) => {

    //   var res = JSON.parse(data); //if you are getting JSON in a string, else do res = data;

    //   for(var i = 0; i < res.list.length; i++){
    //      console.log(res.list[i].main.temp);
    //   }});
  }
  handleError(err: any): any {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
      
  
//   this.http.get<Photo>(this.url).pipe(
//     map(res => res.img_src || []),
//     catchError(error => _throwError(error.message || error))
//  );
    //.pipe(map((response: any) => response.json()));
  }

}

function _throwError(arg0: any): any {
  throw new Error('Function not implemented.');
}
