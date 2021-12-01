import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogArr:any;
  router: any;
  constructor(private blogService:BlogserviceService,private active:ActivatedRoute,private route:Router) { }
  id:any;
  blog:any
  ngOnInit(): void { 
    this.id=this.active.snapshot.params['id'];
    this.blog=this.blogService.redirectspecificblog(this.id)
    console.log(this.id);
    this.blogService.getid(this.id)
  }
  
  removeBlog()
  {
    this.blogService.removeBlog(this.id)
    
  }
  editBlog(data:any)
  {
     this.route.navigateByUrl('addblog')
     this.blogService.getUpdate(data,this.id)
    
  }
}


