import { Component, Input, OnInit } from '@angular/core';
import { VocabularyCollection } from '../vocabulary-collection';

@Component({
  selector: 'app-vocabulary-properties-display',
  templateUrl: './vocabulary-properties-display.component.html',
  styleUrls: ['./vocabulary-properties-display.component.css']
})
export class VocabularyPropertiesDisplayComponent implements OnInit {

  @Input() vocabularyCollection?: VocabularyCollection;

  constructor() { }

  ngOnInit(): void {
  }

}
