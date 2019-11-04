import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ChilivoteDTOUI } from '../models/ChilivoteDTOUI';
import { ChilivoteDTOBE } from '../models/ChilivoteDTOBE';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { MyChilivoteDTO } from '../models/MyChilivoteDTO';
import { ChilivoteVotableDTO } from '../models/ChilivoteVotableDTO';

@Injectable({
  providedIn: 'root'
})
export class ChilivoteService {

  private ChilivoteUrl:string;
  env = environment;

  constructor(private http: HttpClient, private authService:AuthenticationService) { 
    this.ChilivoteUrl = `${this.env.backendUri}/chilivotes`;
  }

  private getHeaders()
  {
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    })
  }

  addChilivote(chilivote: ChilivoteDTOUI): Observable<ChilivoteDTOBE>
  {
    const httpOptions = {
      headers: this.getHeaders()
    };

    return this.http.post<ChilivoteDTOBE>(this.ChilivoteUrl + '/add', chilivote, httpOptions)
  }

  getMyChilivotes(): Observable<MyChilivoteDTO[]>
  {
    const httpOptions = {
      headers: this.getHeaders()
    };

    return this.http.get<MyChilivoteDTO[]>(this.ChilivoteUrl + '/mychilivotes', httpOptions);
  }

  getFeed(): Observable<ChilivoteVotableDTO[]>
  {
    const httpOptions = {
      headers: this.getHeaders()
    };

    return this.http.get<ChilivoteVotableDTO[]>(this.ChilivoteUrl + '/feed', httpOptions);
  }

  deleteChilivote(id:number): Observable<any>
  {
    const httpOptions = {
      headers: this.getHeaders()
    };

    return this.http.delete<any>(this.ChilivoteUrl + '/delete/' + id.toString(), httpOptions);
  }
}
