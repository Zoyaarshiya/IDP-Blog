import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  constructor(private blogDetails:BlogserviceService) {
    //console.log("blog details component")
    const timer:any = setTimeout(()=>{
      this.blogArr =this.blogDetails.getBlogs();
    },1000)
   
   }
  blogArr:any;
  ngOnInit(): void {
    

      
  }
}



