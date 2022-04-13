import { Vocabulary } from "./vocabulary";

export interface VocabularyCollection {

    displayName: string;
    firstLanguage: string;
    secondLanguage: string;
    vocabularies: Vocabulary[];

}
