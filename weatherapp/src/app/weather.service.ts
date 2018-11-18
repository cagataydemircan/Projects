import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { HttpClient, HttpParams } from '../../node_modules/@angular/common/http';
import {  Weather } from './weather';
import { map, mapTo } from '../../node_modules/rxjs/operators';
import { Weather2 } from './weather2';
import { HttpHeaders } from '@angular/common/http';
@Injectable({  providedIn: 'root'})
export class WeatherService {

  private weatherURL= 'http://api.openweathermap.org/data/2.5/forecast?q=';
  

  constructor(private http: HttpClient) { }
  getWeathers(cityId: string): Observable<any>{
    let params = new HttpParams().set('page',cityId);
    console.log(cityId); 
     return this.http.get(this.weatherURL+cityId+"&APPID=fd04c7cd724e3812a75d1650c4b93cbc&units=metric&cnt=10");
  }  
  postWeather(name,date){
   return  this.http.post('http://localhost:3000/add',{
      cityname : name,
      date : date
    })
  }
  getWeathers2(): Promise<any[]> {
    return this.http.get<any[]>('http://api.apixu.com/v1/current.json?key=85063b7f631646368e583230180908&q=Paris').toPromise();
  }

}
