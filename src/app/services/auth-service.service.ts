import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  constructor(private router :Router) { }
 canActivate() : Observable<boolean> | Promise<boolean> | boolean{
   return new Promise ((resolve,reject)=>{
     this.router.navigate(['login']);
   })
 }
  
}
