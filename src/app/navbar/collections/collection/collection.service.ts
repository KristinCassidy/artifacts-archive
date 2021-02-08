import { Artifact } from '../artifact/artifact.model';
import { Collection } from './collection.model';

export class CollectionService {

    private collections: Collection[] = [
        new Collection(
            'Keys',
            0,
            'All types of keys, including Winding Keys',
            '/assets/keys/key-7.jpg', [
                new Artifact( 'key1', 1, 'Keys', '/assets/keys/key-2.jpg','', 1920, 'steel'),
                new Artifact( 'key2', 2, 'Keys', '/assets/keys/key-3.jpg','', 1920, 'steel'),
                new Artifact( 'key3', 3, 'Keys', '/assets/keys/key-6.jpg','', 1920, 'steel'),
                new Artifact( 'key4', 4, 'Keys', '/assets/keys/key-7.jpg','', 1920, 'steel'),
                new Artifact( 'key5', 5, 'Keys', '/assets/keys/key-9.jpg','', 1920, 'steel'),
                new Artifact( 'key6', 6, 'Keys', '/assets/keys/key-11.jpg','', 1920, 'steel')
            ]),
        new Collection(
            'Marbles',
            1,
            'Glass and ceramic marbles',
            '/assets/marbles/marble-2.jpg', [
                new Artifact( 'marble1', 1, 'Marbles', '/assets/marbles/marble-1.jpg','', 1920, 'steel'),
                new Artifact( 'marble2', 2, 'Marbles', '/assets/marbles/marble-2.jpg','', 1920, 'steel'),
                new Artifact( 'marble3', 3, 'Marbles', '/assets/marbles/marble-3.jpg','', 1920, 'steel'),
                new Artifact( 'marble4', 4, 'Marbles', '/assets/marbles/marble-4.jpg','', 1920, 'steel'),
            ]),
        new Collection(
            'Spoons',
            2,
            'Metal spoons, all conditions',
            '/assets/spoons/Spoons_24.jpg', [
                new Artifact( 'spoon 1', 1, 'Keys', '/assets/spoons/Spoons_1.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 2', 2, 'Keys', '/assets/spoons/Spoons_2.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 3', 3, 'Keys', '/assets/spoons/Spoons_3.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 4', 4, 'Keys', '/assets/spoons/Spoons_4.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 5', 5, 'Keys', '/assets/spoons/Spoons_5.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 6', 6, 'Keys', '/assets/spoons/Spoons_6.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 7', 7, 'Keys', '/assets/spoons/Spoons_7.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 8', 8, 'Keys', '/assets/spoons/Spoons_8.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 9', 9, 'Keys', '/assets/spoons/Spoons_9.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 10', 10, 'Keys', '/assets/spoons/Spoons_10.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 11', 11, 'Keys', '/assets/spoons/Spoons_11.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 12', 12, 'Keys', '/assets/spoons/Spoons_12.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 13', 13, 'Keys', '/assets/spoons/Spoons_13.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 14', 14, 'Keys', '/assets/spoons/Spoons_14.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 15', 15, 'Keys', '/assets/spoons/Spoons_15.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 16', 16, 'Keys', '/assets/spoons/Spoons_16.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 17', 17, 'Keys', '/assets/spoons/Spoons_17.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 18', 18, 'Keys', '/assets/spoons/Spoons_18.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 19', 19, 'Keys', '/assets/spoons/Spoons_19.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 20', 20, 'Keys', '/assets/spoons/Spoons_20.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 21', 21, 'Keys', '/assets/spoons/Spoons_21.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 22', 22, 'Keys', '/assets/spoons/Spoons_22.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 23', 23, 'Keys', '/assets/spoons/Spoons_23.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 24', 24, 'Keys', '/assets/spoons/Spoons_24.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 25', 25, 'Keys', '/assets/spoons/Spoons_25.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 26', 26, 'Keys', '/assets/spoons/Spoons_26.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 27', 27, 'Keys', '/assets/spoons/Spoons_27.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 28', 28, 'Keys', '/assets/spoons/Spoons_28.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 29', 29, 'Keys', '/assets/spoons/Spoons_29.jpg','', 1920, 'steel'),
                new Artifact( 'spoon 30', 30, 'Keys', '/assets/spoons/Spoons_30.jpg','', 1920, 'steel'),

            ]),            
    ];

    constructor() {}

    getCollections() {
        return this.collections.slice();
    }

    getCollection(index: number) {
        return this.collections[index];
    }
    
    getArtifact(artifactIndex: number) {
        return this.collections[artifactIndex];
    }
    
//     addArtifactsToCollection(artifacts: Artifact[]) {
//         this.artifactService.addArtifacts(artifacts);
//     }
}
