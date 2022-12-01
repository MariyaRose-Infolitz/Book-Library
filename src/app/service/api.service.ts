import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map}  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }
  getbook(){
    return this.http.get<any>("https://gist.githubusercontent.com/Mariyajoseph-joseph/175ddd0b7f220921e076d7c543cbfd8e/raw/2034e2a5aa74c68f1e3acc890ef4700375b49e5e/books.json")
    .pipe(map ((res:any)=>{
      return res
    }))
  }
}
