import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Profile } from 'src/app/models/profile.model';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm:any;
  exist:any;
  existinguser:any;
  editData:any;
  pro=new Profile();
  constructor(public proser:BlogserviceService,private router:Router) { 
    this.editData=this.proser.editedInfo;
  }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
     fname:new FormControl(this.pro.fname,[Validators.required]),
      lname:new FormControl(this.pro.lname,[Validators.required]),
      email:new FormControl(this.pro.email,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobno:new FormControl(this.pro.mobno,[Validators.required,Validators.pattern("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")]),
      dob:new FormControl(this.pro.dob,[Validators.required]),
      address:new FormControl(this.pro.address,[Validators.required]),
      country:new FormControl(this.pro.country,[Validators.required]),
      aboutyou:new FormControl(this.pro.aboutyou,[Validators.required])
    })
    this.signUpForm.patchValue(this.editData)
  }
submit(data:any)
{
  this.existinguser=localStorage.getItem("UserInfo");
  this.pro.fname=data.value.fname;
  this.pro.lname=data.value.lname;
  this.pro.email=data.value.email;
  this.pro.mobno=data.value.mobno;
  this.pro.dob=data.value.dob;
  this.pro.address=data.value.address;
  this.pro.country=data.value.country;
  this.pro.aboutyou=data.value.aboutyou;
  console.log(this.pro);
  this.proser.getProfile(this.pro,this.existinguser)
  this.router.navigateByUrl('viewprofile')
}
get fname()
{
 return this.signUpForm.get('fname')
}
get lname()
{
 return this.signUpForm.get('lname')
}
get email()
{
 return this.signUpForm.get('email')
}
get mobno()
{
 return this.signUpForm.get('mobno')
}
get dob()
{
 return this.signUpForm.get('dob')
}
get address()
{
 return this.signUpForm.get('address')
}
get country()
{
 return this.signUpForm.get('country')
}
get aboutyou()
{
 return this.signUpForm.get('aboutyou')
}
}
