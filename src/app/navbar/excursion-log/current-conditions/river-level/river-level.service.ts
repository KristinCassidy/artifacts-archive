import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class RiverLevelService {
    weather: any;

    constructor(public http: HttpClient){
    }

    getWeather() {
       return this.http.get("http://api.weatherapi.com/v1/current.json?key=00364a6bd9b343fea3f74009211002&q=63101")  
    }

    getForecast() {
        return this.http.get("http://api.weatherapi.com/v1/forecast.json?key=00364a6bd9b343fea3f74009211002&q=63101&days=1")
    }
    // getWeather() {
    //     this.http
    //         .get("http://api.weatherapi.com/v1/current.json?key=00364a6bd9b343fea3f74009211002&q=63101")
    //         .subscribe(data => {
    //             this.weather = data,
    //             console.log(this.weather)})
    //          return this.weather;   
    // }
}
