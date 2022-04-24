import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileSelectorComponent } from './file-selector/file-selector.component';
import { VocabularyPropertiesDisplayComponent } from './vocabulary-properties-display/vocabulary-properties-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectorComponent,
    VocabularyPropertiesDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
