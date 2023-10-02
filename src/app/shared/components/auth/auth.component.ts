import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  alreadyHaveAc: boolean = false
  hide: boolean = false
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe(res => {
        console.log(res);

      })
  }

  onSignUpFormSubmit(signupForm: NgForm) {
    console.log(signupForm.value);

  }

}
