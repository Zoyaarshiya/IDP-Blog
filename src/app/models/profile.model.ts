export interface proform
{
   fname:string;
   lname:string;
   email:string;
   mobno:number;
   dob:number;
   address:string;
   country:string;
   aboutyou:string;
}
export class Profile implements proform
{
   fname='';
   lname='';
   email='';
   mobno=0;
   dob=0;
   address='';
   country='';
   aboutyou='';
 
}
