export class Excursion {
    public date: string;
    public startTime: string;
    public endTime: string;
    public totalTime: string;
    public riverLevel: string;
    public conditions: string;
    public location: string;
    public coordinates: string;
    public notes: [];
    public notableFinds: [];
    public attendence: string;
    public imagePath: string;
    public wildLife: [];

    constructor(date: string, startTime: string, endTime: string, totalTime: string, riverlevel: string, conditions: string,
                location: string, coordinates: string, notes: [], notableFinds: [], attendence: string, imagePath: string) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalTime = totalTime;
        this.riverLevel = riverlevel;
        this.conditions = conditions;
        this.location = location;
        this.coordinates = coordinates;
        this.notes = notes;
        this.notableFinds = notableFinds;
        this.attendence = attendence;
        this.imagePath = imagePath;
    }
}
