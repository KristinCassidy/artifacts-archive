import { Artifact } from './artifact.model';

export class Collection {
    public name: string;
    public id: number;
    public description: string;
    public imagePath: string;
    public artifacts: Artifact[];

    constructor(name: string, id: number, desc: string, imagePath: string, artifacts: Artifact[]) {
        this.name = name;
        this.id = id;
        this.description = desc;
        this.imagePath = imagePath;
        this.artifacts = artifacts;

    }
}
