import { throwError, Observable, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl: string = '/api/';
  constructor(private http: HttpClient,) {

  }


  getToken(): string {
    return '';
  }

  getUser() {
    return null;
  }

  getHeaders() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  getHeadersForOctetStream() {
    return new HttpHeaders({
      'Accept': 'application/octet-stream',
      'Content-Type': 'application/octet-stream'
    });
  }

  getHeadersForBinary() {
    return new HttpHeaders({
      'Accept': 'application/json'
    });
  }

  get(callingRoute: string, dataObj: any = null): Observable<any> {
    return this.http.get(this.baseUrl + callingRoute, {
      params: dataObj,
      headers: this.getHeaders()
    }).pipe(catchError((err: HttpErrorResponse) => this.handleErrorObservable(err)));
  }

  post(callingRoute: string, dataObj: any, isString: boolean = false) {
    let payload = dataObj;
    if (!!isString) {
      return this.http.post(callingRoute, payload, {
        headers: this.getHeaders()
      }).pipe(catchError((err: HttpErrorResponse) => this.handleErrorObservable(err)));
    } else {
      payload = JSON.stringify(dataObj);
      return this.http.post(this.baseUrl + callingRoute, payload, {
        headers: this.getHeaders()
      }).pipe(catchError((err: HttpErrorResponse) => this.handleErrorObservable(err)));
    }

  }

  getBinary(callingRoute: string, dataObj: any = null): Observable<any> {
    return this.http.get(this.baseUrl + callingRoute, {
      params: dataObj,
      headers: this.getHeadersForOctetStream(),
      responseType: 'blob'
    }).pipe(catchError((err: HttpErrorResponse) => this.handleErrorObservable(err)));
  }

  postBinary(callingRoute: string, dataObj: any) {
    return this.http.post(this.baseUrl + callingRoute, dataObj, {
      headers: this.getHeadersForBinary()
    }).pipe(catchError((err: HttpErrorResponse) => this.handleErrorObservable(err)));
  }

  put(callingRoute: string, dataObj: any) {
    let url = this.baseUrl + callingRoute;
    const payload = JSON.stringify(dataObj);
    return this.http.put(url, payload, {
      headers: this.getHeaders()
    });
  }

  delete(callingRoute: string, dataObj: any = null) {
    const payload = JSON.stringify(dataObj);
    return this.http.request('DELETE', this.baseUrl + callingRoute, {
      headers: this.getHeaders(),
      body: payload
    });
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error);
  }
}
