import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },

{ path: 'addblog', loadChildren: () => import('./pages/addblog/addblog.module').then(m => m.AddblogModule) },


{ path: 'allblog', loadChildren: () => import('./pages/blogdetails/blogdetails.module').then(m => m.BlogdetailsModule) },

{ path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },

{ path: 'viewprofile', loadChildren: () => import('./pages/viewprofile/viewprofile.module').then(m => m.ViewprofileModule) },





{ path: '**', loadChildren: () => import('./pages/errorpage/errorpage.module').then(m => m.ErrorpageModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
