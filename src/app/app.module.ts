import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './heading/heading.component';
import { Course1Component } from './course/course1/course1.component';
import { Course2Component } from './course/course2/course2.component';
import { Course3Component } from './course/course3/course3.component';
import { BlogComponent } from './blog/blog.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeadingComponent,
    Course1Component,
    Course2Component,
    Course3Component,
    BlogComponent,
    TeacherComponent,
    ContactComponent,
    LoginComponent,
    SigninComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
