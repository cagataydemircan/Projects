import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

   
  constructor() { }

  ngOnInit() {
    
  }

  
}
