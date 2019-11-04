import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-delete-chilivote-sheet',
  templateUrl: './delete-chilivote-sheet.component.html',
  styleUrls: ['./delete-chilivote-sheet.component.css']
})
export class DeleteChilivoteSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<DeleteChilivoteSheetComponent>) { }

  ngOnInit() {
  }

  closeDialogue(event: MouseEvent, result:boolean)
  {
    this._bottomSheetRef.dismiss(result);
    event.preventDefault();  
  }
}
