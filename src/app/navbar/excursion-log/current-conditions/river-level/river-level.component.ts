import { Component, OnInit } from '@angular/core';
import { RiverLevelService } from './river-level.service';

@Component({
  selector: 'app-river-level',
  templateUrl: './river-level.component.html',
  styleUrls: ['./river-level.component.css']
})
export class RiverLevelComponent implements OnInit {
  weather: any;
  forecast: any;

  constructor(private weatherService: RiverLevelService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    }); 
	  this.weatherService.getForecast().subscribe(data => {
	  	this.forecast = data;
	  });
  }

}
