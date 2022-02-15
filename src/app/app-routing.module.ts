import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Course1Component } from './course/course1/course1.component';
import { Course2Component } from './course/course2/course2.component';
import { Course3Component } from './course/course3/course3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"course1",component:Course1Component},
  {path:"course2",component:Course2Component},
  {path:"course3",component:Course3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
