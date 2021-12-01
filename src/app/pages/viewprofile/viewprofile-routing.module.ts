import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { ViewprofileComponent } from './viewprofile.component';

const routes: Routes = [{ path: '', component: ViewprofileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewprofileRoutingModule { }
