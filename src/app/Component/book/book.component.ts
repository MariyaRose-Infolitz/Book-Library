import { Component ,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import{FavouriteService} from 'src/app/service/favourite.service'
import{CompletedService} from'src/app/service/completed.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

constructor( private api:ApiService , private favouriteService : FavouriteService ,private CompletedService: CompletedService ){}
public bookList: any
ngOnInit(): void{
this.api.getbook().subscribe(res=>{
  this.bookList = res
})
}

addtofavourite(item :any){
this.favouriteService.addtoFavourite(item)
}
addtoCompleted(item:any){
  this.CompletedService.addtoCompleted(item)
 
}

}
