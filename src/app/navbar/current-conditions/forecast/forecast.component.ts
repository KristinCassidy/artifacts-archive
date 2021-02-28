import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit, OnDestroy {
  forecastSubscription: Subscription;

  weather;
  weekForecast: [];
  weekday: string;
  // daysArray: [];
  // date: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.forecastSubscription = this.weatherService.getForecast()
      .subscribe( data => {
        this.weather = data;
        this.weekForecast = this.weather.forecast.forecastday.slice(1,3);
       
        // this.date = this.weekForecast
        // this.weekday = this.weekForecast
        console.log(this.weekForecast)
      })
  }

  ngOnDestroy() {
    this.forecastSubscription.unsubscribe();
  }


}
