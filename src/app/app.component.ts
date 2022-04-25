import { Component } from '@angular/core';
import { VocabularyCollection } from './vocabulary-collection';
import { Vocabulary } from './vocabulary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error?: string;

  vocabularyCollection?: VocabularyCollection;

  constructor() { }

  onFileChange(file: File) {
    console.log(file.name);
    if (!file.name.endsWith('.voc.json')) {
      this.error = "The file name does not end with 'voc.json'. It seems that you have selected a file with the wrong type.";
      return;
    }
    const textPromise = file.text();
    textPromise.then((text) => {
      const _vocabularyCollection: VocabularyCollection = JSON.parse(text);
      if (this.isVocabularyFileValid(_vocabularyCollection)) {
        this.vocabularyCollection = _vocabularyCollection;
      } else {
        this.error = "One or more of the following entries couldn't be found in the file: <ul>" +
          "<li>'displayName',</li>" +
          "<li>'firstLanguage',</li>" +
          "<li>'secondLanguage',</li>" +
          "<li>'vocabularies'.</li></ul>" +
          "Or the file (also) contains no vocabularies";
      }
    });

    textPromise.catch((error) => {
      this.error = "Something went wrong while reading the file."
      console.error(error);
    })
  }

  isVocabularyFileValid(_vocabularyCollection: VocabularyCollection) {
    return _vocabularyCollection.displayName &&
      _vocabularyCollection.firstLanguage &&
      _vocabularyCollection.secondLanguage &&
      _vocabularyCollection.vocabularies &&
      _vocabularyCollection.vocabularies.length > 0;
  }

}
