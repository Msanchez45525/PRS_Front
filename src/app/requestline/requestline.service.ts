import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  baseurl: string = "http://localhost:5000/api/requests"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<RequestLine[]> {
    return this.http.get(`${this.baseurl}`) as Observable<RequestLine[]>;
  }

  get(id: number): Observable<RequestLine> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }

  create(requestline: RequestLine): Observable<RequestLine> {
    return this.http.post(`${this.baseurl}`, requestline) as Observable<RequestLine>;
  }

  change(requestline: RequestLine): Observable<any> {
    return this.http.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<any>;
  }

  remove(id: number): Observable<RequestLine> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }

}