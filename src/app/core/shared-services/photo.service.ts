import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) {
  }
  getAllPhotos(): Observable<any> {
    return this.http.get<any>(environment.serviceProviderURL+'photos');
  }

  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      
      console.error(error); 
      return of(result);
    };
  }
}
