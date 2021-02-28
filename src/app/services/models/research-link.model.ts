export class Link {
    public title: string;
    public description: string;
    public category: string;
    public linkUrl: string;
    public imagePath: string;

    constructor(title: string, desc: string, category: string, linkUrl: string, imagePath: string) {
        this.title = title;
        this.description = desc;
        this.category = category;
        this.linkUrl = linkUrl;
        this.imagePath = imagePath;
    }
}