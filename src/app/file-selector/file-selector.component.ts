import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  @ViewChild('collectionFileInput') collectionFileInput?: {nativeElement: HTMLInputElement};

  @Output() fileChange = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileChoosed() {
    if (this.collectionFileInput && this.collectionFileInput.nativeElement.files !== null && this.collectionFileInput.nativeElement.files.length !== 0) {
      this.fileChange.emit(this.collectionFileInput.nativeElement.files[0]);
      console.log("File Choose Event Emitted")
    }
  }

}
