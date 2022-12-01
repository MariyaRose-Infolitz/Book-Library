import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletedService {
public completedItemList : any =[]
public completedList = new BehaviorSubject <any> ([])

  constructor() { }
  showBooks(){
return this.completedList.asObservable()
  }

  addtoCompleted(book : any){
this.completedItemList.push(book)
this.completedList.next(this.completedItemList)
console.log(this.completedItemList)
  }
}
