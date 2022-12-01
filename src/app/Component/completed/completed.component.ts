import { Component ,OnInit} from '@angular/core';
import { CompletedService } from 'src/app/service/completed.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit{
public compbook:any =[]

  constructor(private completedservice :CompletedService ){}

ngOnInit(): void {
  this.completedservice.showBooks().subscribe(res=>{
    this.compbook = res
  })
}
}
