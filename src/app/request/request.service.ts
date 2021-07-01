import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseurl: string = "http://localhost:5000/api/requests"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
  }

  remove(id: number): Observable<Request> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  requests(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/line/${id}`) as Observable<Request>;
  }

  review( request : Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}/review`, request) as Observable<any>;
  }

  approve(request : Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}/approve`, request) as Observable<any>;
  }

  
   reject(request : Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}/reject`, request) as Observable<any>;
  }

}