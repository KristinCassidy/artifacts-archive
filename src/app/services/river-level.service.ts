import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class RiverLevelService {
    riverUrl: string = 'https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07010000';

    constructor(public http: HttpClient){
    }

    getRiverLevel() {
        return this.http.get(this.riverUrl);
    }

}

