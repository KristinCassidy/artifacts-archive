import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';

@Component({
  	selector: 'app-weather',
  	templateUrl: './weather.component.html',
  	styles: [`
		.weatherData {
	  		display: flexbox;
	 		/* margin: 0 2em; */
			/* background-color: rgba(177, 177, 177, 0.226); */
		}
		.row {
	  		border-bottom: 1px solid rgba(255, 255, 255, 0.308);
			background-color: rgba(177, 177, 177, 0.226);
			flex-flow: row nowrap;
			color: rgba(85, 85, 85, 0.671);
			/* outline: solid 1px whitesmoke; */
			/* overflow: scroll; */
		}
		.forecastImg {
			height: 40px;
		}
		.col-xs-1 {
			outline: solid 1px whitesmoke;
		}
		.right {
			text-align: right;
		}

  	`],
  	host: { 'class' : 'content'}
})

export class WeatherComponent implements OnInit, OnDestroy {
  	weather: any;
	forecast: any;
	location: string;
	region: string;
	date: string;
	temp: string;
	feelsLike: string;
	condition: string;
	icon: string;

	weatherSubscription: Subscription;
	forecastSubscription: Subscription;

	cloud: string;
	wind: string;
	moonPhase: string;
	sunrise: string;
	sunset: string;
	today;
	tomorrow;
	avgTemp: string;
	maxTemp: string;
	minTemp: string;
	hour: number;
	todaysForcastArray: [];
	tomorrowsForecastArray: [];


constructor( private weatherService: WeatherService ) { }
  

	ngOnInit() {
		this.weatherSubscription = this.weatherService.getWeather()
			.subscribe( data => {
				this.weather = data;
				this.location = this.weather.location.name;
				// + ', ' + this.weather.location.region;
				this.date = this.weather.location.localtime;
				this.temp = this.weather.current.temp_f;
				this.feelsLike = this.weather.current.feelslike_f;
				this.condition = this.weather.current.condition.text;
				this.icon = this.weather.current.condition.icon;
			}); 
		this.forecastSubscription = this.weatherService.getForecast()
			.subscribe( info => {
				this.forecast = info;
				this.cloud = this.forecast.current.cloud;
				this.wind = this.forecast.current.wind_mph;
				this.today = this.forecast.forecast.forecastday[0];
				this.tomorrow = this.forecast.forecast.forecastday[1];
				this.moonPhase = this.today.astro.moon_phase;
				this.sunrise = this.today.astro.sunrise;
				this.sunset = this.today.astro.sunset;
				this.avgTemp = this.today.day.avgtemp_f;
				this.maxTemp = this.today.day.maxtemp_f;
				this.minTemp = this.today.day.mintemp_f;
				this.hour = Number(this.getHour(this.date));
				this.todaysForcastArray = this.getNextForecastHours(this.today.hour);
				// console.log(this.hour);
				// console.log(this.forecast.forecast.forecastday);
			});
    }

  	ngOnDestroy() {
		this.weatherSubscription.unsubscribe();
	}

	getHour(date: string) {
		let dateArray = date.split(' ');
		dateArray = dateArray[1].split(':');
		return dateArray[0];
	}

	getNextForecastHours(hours: []) {
		let nextForecastHour = this.hour + 1;
		let hoursArray = this.today.hour.slice(nextForecastHour, nextForecastHour + 12);
		if (hoursArray.length < 12 ) {
			let i = 0;
			while (hoursArray.length < 12 ) {
				hoursArray.push(this.tomorrow.hour[i]);
				i++;
			}
		}
		return hoursArray;
	}

	getTomorrowsHours() {
		let tomorrowsHours = this.tomorrow.hour.slice(0, 12);
		return tomorrowsHours;
	}

}
