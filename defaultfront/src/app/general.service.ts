import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
// import "rxjs/add/observable/throw";
// import { BehaviorSubject } from "rxjs";
// import { Http } from "@angular/http";
// import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient) { }




  allloans():Observable<any>{
    var url2 = 'http://localhost:8080/api/loandetails';

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  topverified(){
    var url2 = 'http://localhost:8080/api/maxverified';

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  topnotverified(){
    var url2 = 'http://localhost:8080/api/maxnotverified';

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  memberdetail(param:any):Observable<any>{
    var url2 = `http://localhost:8080/api/member/${param}`;

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  plotgraph(param:any):Observable<any>{
    var url2 = `http://localhost:8080/api/intgraph/${param}`;

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  
}
