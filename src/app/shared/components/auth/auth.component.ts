import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnInit {


  alreadyHaveAc: boolean = false
  hide: boolean = true

  constructor(
    private _route: ActivatedRoute,
    private _authservice: AuthService,
    private router: Router,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    // this._route.params
    //   .subscribe(res => {
    //     console.log(res);

    //   })
    if (localStorage.getItem('userid')) {
      this.router.navigate([ '/post' ])
    }

  }

  onSignUpFormSubmit(signupForm: NgForm) {

    if (signupForm.valid) {
      console.log(signupForm.value);
      this.router.navigate([ '/post' ])
    }

  }



  Onlogin(lemail: HTMLInputElement, lpassword: HTMLInputElement) {
    this._authservice.Onlogin(lemail.value, lpassword.value)
      .then(res => {
        console.log(res)
        this.snackbar.openSnackbar('login successfull....!!!')
        localStorage.setItem('userid', res.user.uid)
        this.router.navigate([ '/post' ])
      })
      .catch(rej => {
        console.log(rej)
      })
  }



  Onsignup(email: HTMLInputElement, password: HTMLInputElement) {
    this._authservice.Onsignup(email.value, password.value)
      .then(res => {
        console.log(res)
        this.snackbar.openSnackbar('signup successfull....!!!')
      })
      .catch(rej => {
        console.log(rej)
      })
  }

}
