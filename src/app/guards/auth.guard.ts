import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router){}
  
  canActivate() {
    if(this.auth.isLoggednIn()){
      return true;
    }else{
      this.route.navigate(["login"]);
      return false;
    }
  }
}