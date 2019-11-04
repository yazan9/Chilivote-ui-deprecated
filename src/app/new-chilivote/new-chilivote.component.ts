import { Component, OnInit } from '@angular/core';
import { CloudinaryService } from '../services/cloudinary.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { UploadBottomSheetComponent } from '../modals/upload-bottom-sheet/upload-bottom-sheet.component';
import { PhotoOptions } from '../Constants/PhotoOptions';
import { ChilivoteDTOUI } from '../models/ChilivoteDTOUI';
import { ChilivoteService } from '../services/chilivote.service';

@Component({
  selector: 'app-new-chilivote',
  templateUrl: './new-chilivote.component.html',
  styleUrls: ['./new-chilivote.component.css']
})
export class NewChilivoteComponent implements OnInit {

  newChilivote: ChilivoteDTOUI;
  UploadBottomSheetRef;
  photoID: number;

  constructor(
    private cloudinaryService: CloudinaryService,
    private _bottomSheet: MatBottomSheet,
    private chilivoteService: ChilivoteService
    ) { }

  ngOnInit() {
    this.newChilivote = new ChilivoteDTOUI();
    this.photoID = 1;
  }

  openBottomSheet(photoID: number): void {
    this.UploadBottomSheetRef = this._bottomSheet.open(UploadBottomSheetComponent);
    this.UploadBottomSheetRef.afterDismissed().subscribe((result:PhotoOptions) => {
      this.photoID = photoID;
      if(result == PhotoOptions.Gallery)
      {
        let element:HTMLElement = document.getElementById("PhotoUploader") as HTMLElement;
        element.click();
      }
      if(result == PhotoOptions.Camera)
      {
        //open camera
      }
    });
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
    console.log("---------");
    console.log(this.photoID);
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
     this.cloudinaryService.uploadAnswer(fileReader.result).subscribe((image) => {
       if(this.photoID == 1)
         this.newChilivote.answerLeft = image.public_id;
       if(this.photoID == 2)
       this.newChilivote.answerRight = image.public_id;
    }, (err) => {
      console.log(err);
    });
   };
  }

  submitChilivote(){
    this.chilivoteService.addChilivote(this.newChilivote).subscribe(()=> console.log("ok"));
  }
}
