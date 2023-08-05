import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit{

  form: any = {
    name: null,
    email: null,
    password: null,
    roles: null
  };
  isSuccessfull = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor (private authService: AuthService ) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    const { name, email, password, roles } = this.form;

    this.authService.register(name, email, password, roles ).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessfull = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
