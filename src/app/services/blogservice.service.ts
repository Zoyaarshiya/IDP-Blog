import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  blogarr: any;
  blogs: any;
  blog1: any;
  index:any;
  profArr:any;
  id:any;
  editedInfo:any;
  value:any=-1;
  updateData: any;
  userInfo:any=[];
  x:any;
  
  prof:any;
  url: string = "https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2";

  constructor(private httpService: HttpClient) {
    this.fetchAllData().subscribe(data => {
      this.blogarr = data.articles;
     
      this.blogs = JSON.parse(localStorage.getItem("blogs") || "{}");
      this.getBlog();
      this.blog1 = localStorage.getItem("blogs");
      if(!this.blog1){
        this.getData();
      }
      this.blogs;
    })
   }fetchAllData(): Observable<any> {
    return this.httpService.get<any>(this.url);
  }
  getData()
  {
    localStorage.setItem("blogs", JSON.stringify(this.blogarr));
  }
  getid(id:any)
  {
    this.id=id;
  }
  getFromLocal(index:any,x: any) 
  {
    if(this.value==-1)
    {
      this.blogs.push(x);
    }
    else
    {
      this.blogs[this.value]=x;
    } 
    localStorage.setItem("blogs", JSON.stringify(this.blogs));
}
getBlog()
{
  return this.blogs;
}
getIndex(index: any)
{
  return this.blogs.slice(0, index)
}
redirectspecificblog(index: number)
{
  return this.blogs[index];
}
getBlogs()
{
  return this.blogs;
}
removeBlog(i: any)
{
  this.blogs.splice(i, 1)
  localStorage.setItem("blogs", JSON.stringify(this.blogs))
}
getUpdate(data: any,id:any)
{
  console.log(data);
  this.updateData = data;
  this.value=id;
}
getProfile(proInfo:any,exist:any)
{
 this.profArr=proInfo;
  let exist1=JSON.parse(exist);
  // if(proInfo.value==exist1.value)
  // {
  //   alert("kjsdja")
  // }
  if(proInfo.email==exist1.email && proInfo.fname==exist1.fname
    && proInfo.lname==exist1.lname && proInfo.mobno==exist1.mobno)
  {
    alert("already exist")
  }
  else
  {
   this.prof=localStorage.setItem("UserInfo",JSON.stringify(proInfo))
  }
}
editProfile(info:any)
{
  this.editedInfo=info;
}
}
