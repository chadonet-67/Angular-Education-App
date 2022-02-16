import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;
  // passwordf! : string;
   errorMessage! : string;
  constructor(private formBuilder : FormBuilder,private router :Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginForm = this.formBuilder.group({
      firstname : ["",Validators.required],
      lastname:["",Validators.required],
      phone : ["",Validators.required],
      email :["",[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      passwordf :['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }
 onSubmit(){
   const firstname =  this.loginForm.get('firstname')?.value;
   const lastname = this.loginForm.get('lastname')?.value;
   const phone = this.loginForm.get('phone')?.value;
   const email = this.loginForm.get('email')?.value;
   const password = this.loginForm.get('password')?.value;
   const passwordf = this.loginForm.get('passwordf')?.value;

   if(passwordf == password){
    this.router.navigate(["/about"]);
    alert("Bienvenue "+firstname)
   }else{
      
        this.errorMessage = "Les deux  mot de passe ne concordent pas"
   }

 }
}
