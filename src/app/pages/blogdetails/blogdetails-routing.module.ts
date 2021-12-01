import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { BlogdetailsComponent } from './blogdetails.component';

const routes: Routes = [{ path: 'allblog', component: BlogdetailsComponent },
{path:'blog/:id',
component:BlogComponent}


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogdetailsRoutingModule { }
