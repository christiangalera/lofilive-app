import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lofi } from '../model/lofi.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LofiService {

  apiUrl = 'http://localhost:8080/lofilives';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLives(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
}

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public postLives(live: any): Observable<Lofi> {
    return this.httpClient.post<Lofi>(this.apiUrl, live, this.httpOptions);
}

}
