import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private baseUrl = 'http://localhost:8080/api/v1/visitor';

  constructor(private http: HttpClient) { }

  getVisitorById(visitorId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getVisitorById/${'V026'}`);
  }
}
