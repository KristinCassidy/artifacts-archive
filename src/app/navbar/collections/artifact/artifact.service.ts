import { Artifact } from './artifact.model';

export class ArtifactService {
    private artifacts: Artifact[] = [];
constructor() { }

    // addArtifacts(artifacts: Artifact[]) {
    //     this.artifacts.push(...artifacts);

    // }
    getArtifacts() {
        return this.artifacts.slice();
    }


    // getArtifact(artifactIndex: number) {
    //     return this.artifacts[artifactIndex];

    // }
}
