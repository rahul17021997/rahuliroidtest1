import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GobserviceService {

  _http:HttpClient
  joblist:any[]=[]
  constructor(http:HttpClient) {
    this._http=http
   }
   getdata(){
     return this._http.get("http://localhost:4200/assets/data.json")
   }
  
}
