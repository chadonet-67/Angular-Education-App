import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm! : FormGroup;
  constructor(private formBuilder : FormBuilder,private router :Router) { }
    
  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.signinForm = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
    })
  }
    onSubmit(){
      const email = this.signinForm.get('email')?.value;
      const  password = this.signinForm.get('password')?.value;
      this.router.navigate(["/home"])
      
    }
}
