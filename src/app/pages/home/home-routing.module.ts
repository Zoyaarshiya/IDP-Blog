import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
import { BlogdetailsComponent } from '../blogdetails/blogdetails.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },

{path:'blog/:id',
component:BlogComponent},
{
  path:'allblog',
  component:BlogdetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
