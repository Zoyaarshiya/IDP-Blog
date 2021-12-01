import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators} from '@angular/forms';

import { BlogserviceService } from 'src/app/services/blogservice.service';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  updateData:any;
  editData:any;
  existingData:any=[];
  newData:any=[];
  obj:any;
  info:any;
  loginForm:any;
  constructor(private blog:BlogserviceService) {
    this.updateData=blog.updateData;
  }
  
 ngOnInit(): void {
  this.existingData=localStorage.getItem("blogs"); 
  this.info=this.blog.id;
  this.loginForm=new FormGroup({
    url:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required]),
    description:new FormControl('',Validators.required),
    publishedAt:new FormControl('',[Validators.required])
  })
  this.loginForm.patchValue(this.updateData)
};
  submit(form:any)
  {
    //localStorage.setItem('data', JSON.stringify(this.loginForm.value));
    //console.log(form.value.title);
    this.obj={
      url:form.value.url,
      title:form.value.title,
      author:form.value.author,
      description:form.value.description,
      publishedAt:form.value.publishedAt
    }
    console.log(this.obj)
    this.blog.getFromLocal(this.info,this.obj)
  } 
  get url()
   {
    return this.loginForm.get('url')
   }
  get title()
  {
    return this.loginForm.get('title')
  }
  get author()
  {
    return this.loginForm.get('author')
  }
  get desc()
  {
    return this.loginForm.get('description')
  }
  get publish()
  {
    return this.loginForm.get('publishedAt')
  }
}


