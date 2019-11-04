import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from 'src/app/services/authentication.service';

declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean;
  userDetails: UserDetails;

  constructor(private auth:AuthenticationService) {
   }

  ngOnInit() {
    window.FB.XFBML.parse();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  test()
  {
    this.userDetails = this.auth.getUserDetails();
    console.log(this.userDetails);
  }
}
