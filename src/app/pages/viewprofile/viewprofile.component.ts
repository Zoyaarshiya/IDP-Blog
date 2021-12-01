import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
blogs:any;

  constructor(public view:BlogserviceService,private route:Router) {
  }
  ngOnInit(): void {
   this.blogs=JSON.parse(localStorage.getItem("UserInfo")||"{}");
    
   
    
  }
 edit(info:any)
 {
  this.route.navigateByUrl('signup')
  this.view.editProfile(info)
 }
 
}
