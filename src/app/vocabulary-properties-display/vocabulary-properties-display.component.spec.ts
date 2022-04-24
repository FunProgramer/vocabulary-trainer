import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyPropertiesDisplayComponent } from './vocabulary-properties-display.component';

describe('VocabularyPropertiesDisplayComponent', () => {
  let component: VocabularyPropertiesDisplayComponent;
  let fixture: ComponentFixture<VocabularyPropertiesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyPropertiesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyPropertiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
