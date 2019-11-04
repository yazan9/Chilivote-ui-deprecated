import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { PhotoOptions } from 'src/app/Constants/PhotoOptions';

@Component({
  selector: 'app-upload-bottom-sheet',
  templateUrl: './upload-bottom-sheet.component.html',
  styleUrls: ['./upload-bottom-sheet.component.css']
})
export class UploadBottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<UploadBottomSheetComponent>) {}

  ngOnInit() {
  }

  chooseFromGallery(event: MouseEvent): void
  {
    this.closeSheet(event, PhotoOptions.Gallery);
  }

  openCamera(event: MouseEvent): void
  {
    this.closeSheet(event, PhotoOptions.Camera);
  }

  closeSheet(event: MouseEvent, PhotoOption:PhotoOptions): void {
    this._bottomSheetRef.dismiss(PhotoOption);
    event.preventDefault();
  }

}
