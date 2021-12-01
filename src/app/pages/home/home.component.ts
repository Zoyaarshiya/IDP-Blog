import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogArr:any;
  constructor(private blogService:BlogserviceService) { 
    // blogService.fetchAllData().subscribe(data =>{
    //   localStorage.setItem("blogs",JSON.stringify(data.articles));
    // })
  }

  ngOnInit(): void {
    const timer:any = setTimeout(()=>{
      this.blogArr=this.blogService.getIndex(5)
    },1000)
     
  }
}
