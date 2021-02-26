import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    currentUrl: string = "http://api.weatherapi.com/v1/current.json?key=00364a6bd9b343fea3f74009211002&q=63101";
    forecastUrl: string = "http://api.weatherapi.com/v1/forecast.json?key=00364a6bd9b343fea3f74009211002&q=63101&days=10";

    constructor(public http: HttpClient){
    }

    getWeather() {
       return this.http.get(this.currentUrl);
    }

    getForecast() {
        return this.http.get(this.forecastUrl);
    }

}