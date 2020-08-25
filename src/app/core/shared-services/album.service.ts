import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {
  }

 
  
  getAllAlbums(): Observable<any> {
    return this.http.get<any>(environment.serviceProviderURL+'albums');
  }
  getAllUsers(): Observable<any> {
    return this.http.get<any>(environment.serviceProviderURL+'users');
  }

}
