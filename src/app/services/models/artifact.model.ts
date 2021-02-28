
export class Artifact {
    public name: string;
    public id: number;
    public collection: string;
    public imagePath: string;
    public description: string;
    public year: string;
    public material: string;
    public keywords: string[];

    constructor(name: string, id: number, collection: string, imagePath: string, desc: string, year: string, material: string) {
        this.name = name;
        this.id = id;
        this.collection = collection;
        this.imagePath = imagePath;
        this.description = desc;
        this.year = year;
        this.material = material;
    }
}