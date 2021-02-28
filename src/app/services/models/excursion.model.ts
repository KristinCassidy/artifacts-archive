export class Excursion {
    public date: string;
    public startTime: string;
    public endTime: string;
    public totalTime: string;
    public riverLevel: string;
    public temp: string;
    public conditions: string;
    public location: string;
    public coordinates: string;
    public notes: String[];
    public generalFinds: String[];
    public notableFinds: String[];
    public attendence: string;
    public imagePath: string;
    public wildLife: String[];

    constructor(date: string, startTime: string, endTime: string, totalTime: string, riverlevel: string, temp: string, conditions: string,
                location: string, coordinates: string, notes: String[], generalFinds: String[], notableFinds: String[], attendence: string, imagePath: string) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalTime = totalTime;
        this.riverLevel = riverlevel;
        this.temp = temp;
        this.conditions = conditions;
        this.location = location;
        this.coordinates = coordinates;
        this.notes = notes;
        this.generalFinds = generalFinds;
        this.notableFinds = notableFinds;
        this.attendence = attendence;
        this.imagePath = imagePath;
       
    }
}
