import { Component, OnInit } from '@angular/core';
var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chilivote';

  ngOnInit() {
    document.addEventListener("deviceready", function () {
      alert(device.platform);
    }, false);

  }
}
