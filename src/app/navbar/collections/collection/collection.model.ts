import { Artifact } from '../artifact/artifact.model';

export class Collection {
    public name: string;
    public description: string;
    public imagePath: string;
    public artifacts: Artifact[];

    constructor(name: string, desc: string, imagePath: string, artifacts: Artifact[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.artifacts = artifacts;

    }
}
// import { Ingredient } from "../shared/ingredient.model";

// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;
//   public ingredients: Ingredient[];

//   constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//     this.ingredients = ingredients;
//   }
// }