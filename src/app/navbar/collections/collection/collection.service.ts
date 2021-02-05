import { Artifact } from '../artifact/artifact.model';
import { Collection } from './collection.model';

export class CollectionService {

    private collections: Collection[] = [
        new Collection(
            'Keys',
            1,
            'All types of keys, including Winding Keys',
            '/assets/bottle-stoppers/20170511-_MG_1337.jpg', [
                new Artifact('key 1', 1),
                new Artifact( 'key 2', 2)
            ]),
        new Collection(
            'Marbles',
            2,
            'All types of keys, including Winding Keys',
            '/assets/bottle-stoppers/20170511-_MG_1337.jpg', [
                new Artifact('key 1', 1),
                new Artifact( 'key 2', 2),
                new Artifact( 'marble 1',1)
            ])
    ];

    constructor() {}

    getCollections() {
        return this.collections.slice();
    }

    getCollection(index: number) {
        return this.collections[index];
    }
    
}
