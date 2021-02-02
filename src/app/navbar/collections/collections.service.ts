import { Artifact } from './artifact/artifact.model';
import { Collection } from './collection/collection.model';

export class CollectionsService {

    private collections: Collection[] = [
        new Collection(
            'Keys',
            'All types of keys, including Winding Keys',
            '../../../assets/keys/key-7', [
                new Artifact('key 1', 1)
            ]
        )
    ]
}
