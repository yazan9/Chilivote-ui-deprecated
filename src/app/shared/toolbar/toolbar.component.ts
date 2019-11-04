import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }

  onMyChilivotes()
  {
    this.router.navigateByUrl("/mychilivotes");
  }

  onMyFeed(){
    this.router.navigateByUrl("/main");
  }

}
