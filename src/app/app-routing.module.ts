import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { Course1Component } from './course/course1/course1.component';
import { Course2Component } from './course/course2/course2.component';
import { Course3Component } from './course/course3/course3.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthServiceService } from './services/auth-service.service';
import { SigninComponent } from './signin/signin.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"signin",component:SigninComponent},
  {path:"course1",canActivate:[AuthServiceService],component:Course1Component},
  {path:"course2",canActivate:[AuthServiceService],component:Course2Component},
  {path:"course3",canActivate:[AuthServiceService],component:Course3Component},
  {path:"blog",component:BlogComponent},
  {path:"teachers",canActivate:[AuthServiceService],component:TeacherComponent},
  {path:"contact",component:ContactComponent} ,
  {path:"**",pathMatch:"full",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
