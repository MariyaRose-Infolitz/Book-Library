import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  public favouriteItemList: any =[]
  public bookList = new BehaviorSubject<any>([])

  constructor() { }
  getBooks(){
    return this.bookList.asObservable()
  }

  
  addtoFavourite(book: any){
this.favouriteItemList.push(book)
this.bookList.next(this.favouriteItemList)
console.log(this.favouriteItemList)

  }
}
