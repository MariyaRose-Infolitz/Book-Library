import { Component ,OnInit} from '@angular/core';
import { FavouriteService } from 'src/app/service/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent  implements OnInit{
  public book:any =[]
constructor(private favouriteService: FavouriteService){}
ngOnInit(): void {
  this.favouriteService.getBooks().subscribe(res=>{
    this.book = res
  })
}
}
