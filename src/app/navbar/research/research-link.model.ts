export class Link {
    public title: string;
    public description: string;
    public category: string;
    public url: string;
    public imagePath: string;

    constructor(title: string, desc: string, category: string, url: string, imagePath: string) {
        this.title = title;
        this.description = desc;
        this.category = category;
        this.url = url;
        this.imagePath = imagePath;
    }
}