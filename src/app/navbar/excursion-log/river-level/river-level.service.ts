import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class RiverLevelService {

    constructor(public httpClient: HttpClient){
    }

    getWeather() {
        return this.httpClient.get("http://api.weatherapi.com/v1/forecast.json?key=00364a6bd9b343fea3f74009211002&q=63101&days=1")
    }
}

