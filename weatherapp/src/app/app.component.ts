import { Component, OnInit } from '@angular/core';
import { HttpClient, post } from '../../node_modules/@types/selenium-webdriver/http';
import { WeatherService } from './weather.service';
import {  Weather } from './weather';
import {Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '../../node_modules/@angular/common';
import { Weather2 } from './weather2';
import { Observable } from 'rxjs';
import { async } from 'q';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weathers : any;
  public weathers2 = [];
  mapped = [];
  name = 'izmir';
   a : any;
  constructor(private weatherService : WeatherService){}
  cityId : string;
  ngOnInit() {        
  }

  getWeather(){
    this.weatherService.getWeathers(this.cityId)    
    .subscribe(data => this.weathers = data);
    
   
  }


   getWeather2(){
     this.weatherService.getWeathers2().then( result => { this.weathers2[0] = result; 
     console.log(this.weathers2[0].name);
    });
   }
   
}
