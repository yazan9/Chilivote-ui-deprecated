import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

declare var FB: any;

export interface UserDetails {
  id:number;
  email: string;
  avatar: string;
  exp: number;
}

interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private AuthenticationURL: string
  env = environment;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {

    this.AuthenticationURL = `${this.env.backendUri}`;

    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: '405782810353601',
        cookie: true,
        xfbml: true,
        version: 'v3.3'
      });
      FB.AppEvents.logPageView();

      FB.Event.subscribe('auth.statusChange', (response) => {
        console.log("this is facebook response = " + response.status)
        if (response.status === 'connected') {
          this.login(response.authResponse.accessToken).subscribe(()=>{
            this.navigateToMain();
          });
        } else if (response.status === 'not_authorized') {
          // The user is logged in on Facebook, but has not authorized your app
        }
        else {
        //   this.logout();
        }
      });
    };


    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  private navigateToMain(){
    this.ngZone.run(() => this.router.navigateByUrl('/main')); 
  }

  private login(FBToken: string): Observable<any> {
    let base = this.http.post(this.AuthenticationURL + '/users/login', { "FBToken": FBToken });
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          console.log(data.token);
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  private saveToken(token: string): void {
    localStorage.removeItem('mean-token');
    localStorage.setItem('mean-token', token);
  }

  // public isLoggedIn(): boolean {
  //   return FB.getLoginStatus((response) => {
  //     if (response.status == 'connected')
  //       return true;
  //     else
  //       return false;
  //   });
  // }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
     payload = token.split('.')[1];
     payload = window.atob(payload);
     return JSON.parse(payload);
    }
    else {
     return null;
    }
  }
  
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } 
    else {
      return false;
    }
  }

  public getToken(): string {
    return localStorage.getItem('mean-token');
  }

  public logout(): void {
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/login');
  }
}
