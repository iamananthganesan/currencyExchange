import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    private route: Router,
    private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  get fc() { 
    return this.loginForm.controls; 
  }

  login() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.auth.sendToken(this.loginForm.value.username)
      this.route.navigate(["/currency-converter"]);
    }
  }
}